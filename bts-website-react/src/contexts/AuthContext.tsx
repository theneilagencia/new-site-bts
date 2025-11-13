import { createContext, useContext, useState, ReactNode } from 'react';
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

// Demo users
const demoUsers: Array<User & { password: string }> = [
  {
    id: '1',
    email: 'parceiro@demo.com',
    password: 'demo123',
    name: 'João Silva',
    role: 'partner',
    company: 'Tech Solutions Ltda',
    phone: '(11) 98765-4321',
    cpf_cnpj: '12.345.678/0001-90',
  },
  {
    id: '2',
    email: 'admin@btsglobal.com',
    password: 'admin123',
    name: 'Admin BTS',
    role: 'admin',
    company: 'BTS Global Corp',
  },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('bts-user');
    return stored ? JSON.parse(stored) : null;
  });

  const isAuthenticated = !!user;
  const isAdmin = user?.role === 'admin';

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const foundUser = demoUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('bts-user', JSON.stringify(userWithoutPassword));
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('bts-user');
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
