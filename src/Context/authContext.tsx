import React, {createContext, useState, useContext, ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserType {
  name?: string;
  surname?: string;
  email?: string;
  avatar?: string;
}

interface AuthContextType {
  user: UserType | null;
  setUser: (user: UserType) => void;
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);

  const login = async (newToken: string) => {
    await AsyncStorage.setItem('token', newToken);
    setToken(newToken);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    setToken(null);
    setIsAuthenticated(false);
  };

  return <AuthContext.Provider value={{isAuthenticated, token, login, logout, user, setUser}}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
