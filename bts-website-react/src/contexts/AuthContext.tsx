import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { User } from '@/types';
import { authApi, ApiError } from '@/lib/api';

export type { User };

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const DEMO_COMPANY = 'BTS Global Corp';
const STORAGE_KEYS = {
  USERS: 'bts-all-users',
  SESSION_USER: 'bts-user',
  SESSION_EXPIRY: 'bts-session-expiry',
};
const SESSION_DURATION_MS = 4 * 60 * 60 * 1000;

const demoPartnerEmail = import.meta.env.VITE_DEMO_PARTNER_EMAIL ?? 'parceiro@demo.com';
const demoPartnerPassword = import.meta.env.VITE_DEMO_PARTNER_PASSWORD ?? 'demo123';
const demoAdminEmail = import.meta.env.VITE_DEMO_ADMIN_EMAIL ?? 'admin@btsglobal.com';
const demoAdminPassword = import.meta.env.VITE_DEMO_ADMIN_PASSWORD ?? 'admin123';

const legacyPartnerEmail = 'elcio@bts.com';
const legacyPartnerPassword = 'partner123';
const legacyAdminEmail = 'admin@btsglobalcorp.com';
const legacyAdminPassword = 'BtS@13112025';

function getDefaultUsers(): Array<User & { password: string }> {
  return [
    {
      id: 'partner-demo',
      email: demoPartnerEmail,
      password: demoPartnerPassword,
      name: 'Parceiro Demo',
      role: 'partner',
      company: DEMO_COMPANY,
      status: 'active',
    },
    {
      id: 'partner-legacy',
      email: legacyPartnerEmail,
      password: legacyPartnerPassword,
      name: 'Elcio (Parceiro)',
      role: 'partner',
      company: DEMO_COMPANY,
      status: 'active',
    },
    {
      id: 'admin-demo',
      email: demoAdminEmail,
      password: demoAdminPassword,
      name: 'Administrador Demo',
      role: 'admin',
      company: DEMO_COMPANY,
      status: 'active',
    },
    {
      id: 'admin-legacy',
      email: legacyAdminEmail,
      password: legacyAdminPassword,
      name: 'Super Admin',
      role: 'admin',
      company: DEMO_COMPANY,
      status: 'active',
    },
  ];
}

// Get all users from localStorage
function withDemoUsers(users: Array<User & { password: string }>): Array<User & { password: string }> {
  const demoUsers = getDefaultUsers();
  let updated = false;
  const clonedUsers = [...users];

  demoUsers.forEach((demoUser) => {
    const index = clonedUsers.findIndex((user) => user.email === demoUser.email);

    if (index === -1) {
      clonedUsers.push(demoUser);
      updated = true;
      return;
    }

    const existingUser = clonedUsers[index];
    const requiresSync =
      existingUser.password !== demoUser.password ||
      existingUser.role !== demoUser.role ||
      existingUser.status !== 'active';

    if (requiresSync) {
      clonedUsers[index] = {
        ...existingUser,
        ...demoUser,
        id: existingUser.id ?? demoUser.id,
        status: 'active',
      };
      updated = true;
    }
  });

  if (updated) {
    saveAllUsers(clonedUsers);
  }

  return clonedUsers;
}

function getAllUsers(): Array<User & { password: string }> {
  if (typeof window === 'undefined') {
    return getDefaultUsers();
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEYS.USERS);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return withDemoUsers(parsed);
      }
    }
  } catch (error) {
    console.error('Error loading users:', error);
  }
  
  const seededUsers = getDefaultUsers();
  saveAllUsers(seededUsers);
  return seededUsers;
}

// Save users to localStorage
function saveAllUsers(users: Array<User & { password: string }>) {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  } catch (error) {
    console.error('Error saving users:', error);
  }
}

const getInitialSessionUser = () => {
  if (typeof window === 'undefined') {
    return null;
  }
  const stored = sessionStorage.getItem(STORAGE_KEYS.SESSION_USER);
  return stored ? JSON.parse(stored) : null;
};

const getInitialSessionExpiry = () => {
  if (typeof window === 'undefined') {
    return null;
  }
  const stored = sessionStorage.getItem(STORAGE_KEYS.SESSION_EXPIRY);
  return stored ? Number(stored) : null;
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => getInitialSessionUser());
  const [sessionExpiry, setSessionExpiry] = useState<number | null>(() => getInitialSessionExpiry());

  const isAuthenticated = !!user;
  const isAdmin = user?.role === 'admin';

  const normalizeApiUser = (apiUser: any): User => ({
    id: apiUser.id,
    email: apiUser.email,
    name: apiUser.name,
    role: apiUser.role === 'admin' ? 'admin' : 'partner',
    company: apiUser.company ?? DEMO_COMPANY,
    phone: apiUser.phone ?? undefined,
    status: (apiUser.status as User['status']) ?? 'active',
  });

  const clearSessionStorage = () => {
    if (typeof window === 'undefined') return;
    sessionStorage.removeItem(STORAGE_KEYS.SESSION_USER);
    sessionStorage.removeItem(STORAGE_KEYS.SESSION_EXPIRY);
  };

  const persistSession = (sessionUser: User, expiry: number) => {
    setSessionExpiry(expiry);
    setUser(sessionUser);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(STORAGE_KEYS.SESSION_USER, JSON.stringify(sessionUser));
      sessionStorage.setItem(STORAGE_KEYS.SESSION_EXPIRY, expiry.toString());
    }
  };

  // Validar sessão periodicamente
  useEffect(() => {
    if (!user || !sessionExpiry) return;

    const checkSession = setInterval(() => {
      const now = Date.now();
      if (now >= sessionExpiry) {
        console.warn('Sessão expirada!');
        logout();
      }
    }, 30000); // Check every 30 seconds

    return () => clearInterval(checkSession);
  }, [user, sessionExpiry]);

  // Restaurar sessão via token da API (JWT)
  useEffect(() => {
    let cancelled = false;

    const hydrateFromApiToken = async () => {
      if (typeof window === 'undefined') return;
      const storedToken = localStorage.getItem('bts-auth-token');
      if (!storedToken) return;

      try {
        const apiUser = await authApi.getMe();
        if (cancelled) return;
        persistSession(normalizeApiUser(apiUser), Date.now() + SESSION_DURATION_MS);
      } catch (error) {
        console.warn('Falha ao restaurar sessão via API:', error);
        authApi.logout();
        clearSessionStorage();
      }
    };

    hydrateFromApiToken();

    return () => {
      cancelled = true;
    };
  }, []);

  const loginWithLocalFallback = async (email: string, password: string): Promise<boolean> => {
    const allUsers = getAllUsers();
    const foundUser = allUsers.find(
      (u) => u.email === email && u.password === password && u.status !== 'inactive'
    );

    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      const sessionUser: User = {
        ...userWithoutPassword,
        status: userWithoutPassword.status ?? 'active',
      };
      persistSession(sessionUser, Date.now() + SESSION_DURATION_MS);
      console.log('✅ Login local (fallback) bem-sucedido:', sessionUser.email);
      return true;
    }

    console.warn('❌ Login local falhou para:', email);
    return false;
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const data = await authApi.login(email, password);
      const sessionUser = normalizeApiUser(data.user);
      persistSession(sessionUser, Date.now() + SESSION_DURATION_MS);
      console.log('✅ Login via API:', sessionUser.email);
      return true;
    } catch (err) {
      console.error('Erro ao autenticar via API:', err);

      if (err instanceof ApiError) {
        if (err.status >= 500) {
          return loginWithLocalFallback(email, password);
        }
        return false;
      }

      return loginWithLocalFallback(email, password);
    }
  };

  const logout = () => {
    authApi.logout();
    setUser(null);
    setSessionExpiry(null);
    clearSessionStorage();
    console.log('👋 Logout realizado');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}

// Helper functions for user management
export function getAllStoredUsers(): User[] {
  return getAllUsers().map(({ password, ...user }) => user);
}

export function createStoredUser(userData: User & { password: string }): boolean {
  try {
    const allUsers = getAllUsers();
    
    // Check if email already exists
    if (allUsers.some(u => u.email === userData.email)) {
      return false;
    }
    
    allUsers.push(userData);
    saveAllUsers(allUsers);
    
    console.log('✅ Usuário criado e salvo:', userData.email);
    return true;
  } catch (error) {
    console.error('❌ Erro ao criar usuário:', error);
    return false;
  }
}

export function updateStoredUser(id: string, updates: Partial<User>): boolean {
  try {
    const allUsers = getAllUsers();
    const index = allUsers.findIndex(u => u.id === id);
    
    if (index === -1) return false;
    
    allUsers[index] = { ...allUsers[index], ...updates };
    saveAllUsers(allUsers);
    
    console.log('✅ Usuário atualizado:', id);
    return true;
  } catch (error) {
    console.error('❌ Erro ao atualizar usuário:', error);
    return false;
  }
}

export function resetStoredUserPassword(id: string, newPassword: string): boolean {
  try {
    const allUsers = getAllUsers();
    const index = allUsers.findIndex(u => u.id === id);
    
    if (index === -1) return false;
    
    allUsers[index].password = newPassword;
    saveAllUsers(allUsers);
    
    console.log('✅ Senha resetada para usuário:', id);
    return true;
  } catch (error) {
    console.error('❌ Erro ao resetar senha:', error);
    return false;
  }
}
