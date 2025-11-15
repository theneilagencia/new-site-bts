import { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';
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

const SESSION_DURATION_MS = 4 * 60 * 60 * 1000;
const SESSION_USER_KEY = 'bts-user';
const SESSION_EXPIRY_KEY = 'bts-session-expiry';

const DEFAULT_USERS: Array<User & { password: string }> = [
  {
    id: 'superadmin-001',
    email: 'admin@btsglobalcorp.com',
    password: 'BtS@13112025',
    name: 'Super Admin',
    role: 'admin',
    company: 'BTS Global Corp',
    status: 'active',
  },
];

const isBrowser = () => typeof window !== 'undefined';

function readStoredSession(): { user: User | null; expiry: number | null } {
  if (!isBrowser()) {
    return { user: null, expiry: null };
  }

  try {
    const storedUser = sessionStorage.getItem(SESSION_USER_KEY);
    const storedExpiry = sessionStorage.getItem(SESSION_EXPIRY_KEY);

    if (!storedUser || !storedExpiry) {
      return { user: null, expiry: null };
    }

    const expiry = Number(storedExpiry);
    if (!Number.isFinite(expiry) || Date.now() >= expiry) {
      sessionStorage.removeItem(SESSION_USER_KEY);
      sessionStorage.removeItem(SESSION_EXPIRY_KEY);
      return { user: null, expiry: null };
    }

    return { user: JSON.parse(storedUser), expiry };
  } catch (error) {
    console.error('Error restoring auth session:', error);
    return { user: null, expiry: null };
  }
}

function saveSession(user: User, expiry: number) {
  if (!isBrowser()) return;

  try {
    sessionStorage.setItem(SESSION_USER_KEY, JSON.stringify(user));
    sessionStorage.setItem(SESSION_EXPIRY_KEY, expiry.toString());
  } catch (error) {
    console.error('Error saving auth session:', error);
  }
}

function clearSessionStorage() {
  if (!isBrowser()) return;

  try {
    sessionStorage.removeItem(SESSION_USER_KEY);
    sessionStorage.removeItem(SESSION_EXPIRY_KEY);
  } catch (error) {
    console.error('Error clearing auth session:', error);
  }
}

// Get all users from localStorage
function getAllUsers(): Array<User & { password: string }> {
  if (!isBrowser()) {
    return DEFAULT_USERS;
  }

  try {
    const stored = localStorage.getItem('bts-all-users');
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading users:', error);
  }
  
  return DEFAULT_USERS;
}

// Save users to localStorage
function saveAllUsers(users: Array<User & { password: string }>) {
  if (!isBrowser()) return;

  try {
    localStorage.setItem('bts-all-users', JSON.stringify(users));
  } catch (error) {
    console.error('Error saving users:', error);
  }
}

function findLocalUser(email: string, password: string): User | null {
  const allUsers = getAllUsers();
  const foundUser = allUsers.find(
    (u) => u.email === email && u.password === password && u.status !== 'inactive'
  );

  if (!foundUser) {
    return null;
  }

  const { password: _unused, ...userWithoutPassword } = foundUser;
  return userWithoutPassword;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const initialSession = readStoredSession();
  const [user, setUser] = useState<User | null>(initialSession.user);
  const [sessionExpiry, setSessionExpiry] = useState<number | null>(initialSession.expiry);

  const isAuthenticated = !!user;
  const isAdmin = user?.role === 'admin';

  const persistSession = useCallback((nextUser: User, expiryOverride?: number) => {
    const expiry = expiryOverride ?? Date.now() + SESSION_DURATION_MS;
    setUser(nextUser);
    setSessionExpiry(expiry);
    saveSession(nextUser, expiry);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setSessionExpiry(null);
    clearSessionStorage();
    authApi.logout();
    console.log('👋 Logout realizado');
  }, []);

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
  }, [logout, sessionExpiry, user]);

  // Sincronizar usuário autenticado via API quando houver token válido
  useEffect(() => {
    if (!isBrowser()) return;

    let isMounted = true;

    const syncAuthenticatedUser = async () => {
      try {
        const authenticatedUser = await authApi.getMe();
        if (authenticatedUser && isMounted) {
          const expiry =
            sessionExpiry && sessionExpiry > Date.now()
              ? sessionExpiry
              : Date.now() + SESSION_DURATION_MS;
          persistSession(authenticatedUser, expiry);
        }
      } catch (error) {
        if (error instanceof ApiError && error.status === 401) {
          logout();
        } else {
          console.error('Erro ao sincronizar sessão:', error);
        }
      }
    };

    syncAuthenticatedUser();

    return () => {
      isMounted = false;
    };
  }, [logout, persistSession, sessionExpiry]);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const data = await authApi.login(email, password);
      if (data?.user) {
        persistSession(data.user);
        console.log('✅ Login bem-sucedido (API):', data.user.email);
        console.log('🕒 Sessão expira em 4 horas');
        return true;
      }

      console.warn('Login via API não retornou usuário.');
      return false;
    } catch (error) {
      console.warn('Login via API falhou, tentando fallback local...', error);
      const fallbackUser = findLocalUser(email, password);

      if (fallbackUser) {
        persistSession(fallbackUser);
        console.log('✅ Login realizado com usuário local:', fallbackUser.email);
        return true;
      }

      console.warn('❌ Login falhou para:', email);
      return false;
    }
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
