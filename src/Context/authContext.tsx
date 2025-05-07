import React, {createContext, useState, useContext, ReactNode} from 'react';

// AuthContext türünü tanımlayalım
interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

// AuthContext'i oluşturuyoruz
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider, context'i sağlayan bileşen
export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = () => {
    setIsAuthenticated(true); // Giriş yapıldığında true yap
  };

  const logout = () => {
    setIsAuthenticated(false); // Çıkış yapıldığında false yap
  };

  return <AuthContext.Provider value={{isAuthenticated, login, logout}}>{children}</AuthContext.Provider>;
};

// useAuth, context'e erişim sağlamak için kullanılacak custom hook
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
