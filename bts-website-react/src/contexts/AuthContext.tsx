import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { User } from '@/types';

export type { User };

export type LoginErrorCode = 'user_not_found' | 'inactive_user' | 'invalid_password' | 'unknown_error';

export interface LoginResult {
  success: boolean;
  message?: string;
  code?: LoginErrorCode;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<LoginResult>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

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
  {
    id: 'partner-demo-001',
    email: 'parceiro@demo.com',
    password: 'demo123',
    name: 'Parceiro Demo',
    role: 'partner',
    company: 'Demo Corp',
    status: 'active',
  },
  {
    id: 'partner-theo-001',
    email: 'theo@btsglobalcorp.com',
    password: 'Theo@2025',
    name: 'Theo Logistics',
    role: 'partner',
    company: 'BTS Logistics',
    phone: '+55 11 4002-8922',
    status: 'active',
  },
];

// Get all users from localStorage
function getAllUsers(): Array<User & { password: string }> {
  if (typeof window === 'undefined') {
    return DEFAULT_USERS;
  }

  try {
    const stored = window.localStorage.getItem('bts-all-users');
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading users:', error);
  }
  
  saveAllUsers(DEFAULT_USERS);
  return DEFAULT_USERS;
}

// Save users to localStorage
function saveAllUsers(users: Array<User & { password: string }>) {
  if (typeof window === 'undefined') return;

  try {
    window.localStorage.setItem('bts-all-users', JSON.stringify(users));
  } catch (error) {
    console.error('Error saving users:', error);
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  // ⚠️ MUDANÇA CRÍTICA: Usar sessionStorage ao invés de localStorage
  // Isso faz logout automático ao fechar o navegador
  const [user, setUser] = useState<User | null>(() => {
    const stored = sessionStorage.getItem('bts-user');
    return stored ? JSON.parse(stored) : null;
  });

  const [sessionExpiry, setSessionExpiry] = useState<number | null>(null);

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

  const login = async (email: string, password: string): Promise<LoginResult> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Get all users (including dynamically created ones)
    const allUsers = getAllUsers();

    const userByEmail = allUsers.find((u) => u.email === email);

    if (!userByEmail) {
      console.warn('❌ Login falhou - usuário não encontrado:', email);
      return {
        success: false,
        code: 'user_not_found',
        message: 'Não encontramos uma conta com este e-mail. Verifique os dados e tente novamente.',
      };
    }

    if (userByEmail.status === 'inactive') {
      console.warn('❌ Login bloqueado - usuário inativo:', email);
      return {
        success: false,
        code: 'inactive_user',
        message: 'Este usuário está desativado. Entre em contato com um administrador para reativar o acesso.',
      };
    }

    if (userByEmail.password !== password) {
      console.warn('❌ Login falhou - senha incorreta:', email);
      return {
        success: false,
        code: 'invalid_password',
        message: 'Senha incorreta. Confira e tente novamente.',
      };
    }

    const { password: _, ...userWithoutPassword } = userByEmail;
    
    // Set session expiry (4 hours)
    const expiry = Date.now() + (4 * 60 * 60 * 1000);
    setSessionExpiry(expiry);
    
    setUser(userWithoutPassword);
    
    // ⚠️ MUDANÇA: sessionStorage ao invés de localStorage
    sessionStorage.setItem('bts-user', JSON.stringify(userWithoutPassword));
    sessionStorage.setItem('bts-session-expiry', expiry.toString());
    
    console.log('✅ Login bem-sucedido:', userWithoutPassword.email);
    console.log('🕒 Sessão expira em 4 horas');
    
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    setSessionExpiry(null);
    sessionStorage.removeItem('bts-user');
    sessionStorage.removeItem('bts-session-expiry');
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
