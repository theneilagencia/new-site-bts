import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'partner' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: 'active' | 'inactive';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: (onLogoutComplete?: () => void) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demonstration
const MOCK_USERS: (User & { password: string })[] = [
  {
    id: '1',
    name: 'Elcio Reis',
    email: 'elcio@bts.com',
    password: 'partner123',
    role: 'partner',
    status: 'active',
  },
  {
    id: '2',
    name: 'Admin BTS',
    email: 'admin@bts.com',
    password: 'admin123',
    role: 'admin',
    status: 'active',
  },
];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check for stored session
    const storedUser = localStorage.getItem('bts-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setMounted(true);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const foundUser = MOCK_USERS.find(
      u => u.email === email && u.password === password
    );

    if (foundUser && foundUser.status === 'active') {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('bts-user', JSON.stringify(userWithoutPassword));
      return true;
    }

    return false;
  };

  const logout = (onLogoutComplete?: () => void) => {
    setUser(null);
    localStorage.removeItem('bts-user');
    // Force reload to return to public site
    window.location.reload();
    if (onLogoutComplete) {
      onLogoutComplete();
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}