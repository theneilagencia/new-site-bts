import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { User } from '@/types';

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

const demoPartnerEmail = import.meta.env.VITE_DEMO_PARTNER_EMAIL ?? 'parceiro@demo.com';
const demoPartnerPassword = import.meta.env.VITE_DEMO_PARTNER_PASSWORD ?? 'demo123';
const demoAdminEmail = import.meta.env.VITE_DEMO_ADMIN_EMAIL ?? 'admin@btsglobal.com';
const demoAdminPassword = import.meta.env.VITE_DEMO_ADMIN_PASSWORD ?? 'admin123';

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
      id: 'admin-demo',
      email: demoAdminEmail,
      password: demoAdminPassword,
      name: 'Administrador Demo',
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
  const mappedEmails = new Set(users.map((user) => user.email));

  demoUsers.forEach((demoUser) => {
    if (!mappedEmails.has(demoUser.email)) {
      users.push(demoUser);
      updated = true;
    }
  });

  if (updated) {
    saveAllUsers(users);
  }

  return users;
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
  // ⚠️ MUDANÇA CRÍTICA: Usar sessionStorage ao invés de localStorage
  // Isso faz logout automático ao fechar o navegador
  const [user, setUser] = useState<User | null>(() => getInitialSessionUser());

  const [sessionExpiry, setSessionExpiry] = useState<number | null>(() => getInitialSessionExpiry());

  const isAuthenticated = !!user;
  const isAdmin = user?.role === 'admin';

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

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Get all users (including dynamically created ones)
    const allUsers = getAllUsers();

    // Find user
    const foundUser = allUsers.find(
      (u) => u.email === email && u.password === password && u.status !== 'inactive'
    );

    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      
      // Set session expiry (4 hours)
      const expiry = Date.now() + (4 * 60 * 60 * 1000);
      setSessionExpiry(expiry);
      
      setUser(userWithoutPassword);
      
      // ⚠️ MUDANÇA: sessionStorage ao invés de localStorage
      if (typeof window !== 'undefined') {
        sessionStorage.setItem(STORAGE_KEYS.SESSION_USER, JSON.stringify(userWithoutPassword));
        sessionStorage.setItem(STORAGE_KEYS.SESSION_EXPIRY, expiry.toString());
      }
      
      console.log('✅ Login bem-sucedido:', userWithoutPassword.email);
      console.log('🕒 Sessão expira em 4 horas');
      
      return true;
    }

    console.warn('❌ Login falhou para:', email);
    return false;
  };

  const logout = () => {
    setUser(null);
    setSessionExpiry(null);
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem(STORAGE_KEYS.SESSION_USER);
      sessionStorage.removeItem(STORAGE_KEYS.SESSION_EXPIRY);
    }
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
