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

// Production user - SuperAdmin
const productionUsers: Array<User & { password: string }> = [
  {
    id: 'superadmin-001',
    email: 'Admin',
    password: 'BtS@13112025',
    name: 'Super Admin',
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

    const foundUser = productionUsers.find(
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
