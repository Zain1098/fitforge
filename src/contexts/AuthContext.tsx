import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check localStorage for stored user
    const storedUser = localStorage.getItem('fitforge_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Mock login - in real app, this would call an API
    await new Promise((resolve) => setTimeout(resolve, 800));
    const mockUser = {
      id: '1',
      name: 'Alex Champion',
      email,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + email,
    };
    setUser(mockUser);
    localStorage.setItem('fitforge_user', JSON.stringify(mockUser));
  };

  const signup = async (name: string, email: string, password: string) => {
    // Mock signup
    await new Promise((resolve) => setTimeout(resolve, 800));
    const mockUser = {
      id: '1',
      name,
      email,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + email,
    };
    setUser(mockUser);
    localStorage.setItem('fitforge_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('fitforge_user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
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
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
