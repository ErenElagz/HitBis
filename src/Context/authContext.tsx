import React, {createContext, useState, useEffect, useContext, useMemo} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserType {
  name: string;
  username: string;
  avatar?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: UserType | null;
  token: string | null;
  isLoading: boolean;
  login: (token: string, userData: UserType) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [state, setState] = useState<{
    user: UserType | null;
    token: string | null;
    isLoading: boolean;
  }>({
    user: null,
    token: null,
    isLoading: true,
  });

  useEffect(() => {
    const loadAuthData = async () => {
      try {
        const [token, userData] = await AsyncStorage.multiGet(['token', 'user']);

        setState({
          token: token[1],
          user: userData[1] ? JSON.parse(userData[1]) : null,
          isLoading: false,
        });
      } catch (error) {
        console.error('Failed to load auth data', error);
        setState(prev => ({...prev, isLoading: false}));
      }
    };

    loadAuthData();
  }, []);

  const login = async (token: string, userData: UserType) => {
    try {
      if (!userData) {
        throw new Error('User data cannot be null/undefined');
      }

      const userString = JSON.stringify(userData);

      await AsyncStorage.multiSet([
        ['token', token],
        ['user', userString],
      ]);

      setState({token, user: userData, isLoading: false});
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = async () => {
    await AsyncStorage.multiRemove(['token', 'user']);
    setState({token: null, user: null, isLoading: false});
  };

  const isAuthenticated = useMemo(() => {
    return !!state.token && !!state.user;
  }, [state.token, state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token: state.token,
        isLoading: state.isLoading,
        isAuthenticated,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
