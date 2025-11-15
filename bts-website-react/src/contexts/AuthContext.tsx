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

// Get all users from localStorage
function getAllUsers(): Array<User & { password: string }> {
  try {
    const stored = localStorage.getItem('bts-all-users');
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading users:', error);
  }
  
  // Default superadmin
  return [
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
}

// Save users to localStorage
function saveAllUsers(users: Array<User & { password: string }>) {
  try {
    localStorage.setItem('bts-all-users', JSON.stringify(users));
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
      sessionStorage.setItem('bts-user', JSON.stringify(userWithoutPassword));
      sessionStorage.setItem('bts-session-expiry', expiry.toString());
      
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
