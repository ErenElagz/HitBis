import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// Navigators
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

export default function RootNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Login state

  // Simulate login check (replace with your auth logic)
    useEffect(() => {
      const checkLoginStatus = async () => {
        // Example: Replace with API or AsyncStorage check
        const userLoggedIn = false; // Example login status
        setIsLoggedIn(userLoggedIn);
      };

      checkLoginStatus();
    }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
