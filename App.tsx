import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './src/navigators/AuthNavigator';
import TabNavigator from './src/navigators/TabNavigator';
// Context
import {AuthProvider, useAuth} from './src/Context/authContext';
// AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';
// Toast
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

const AppContent = () => {
  const {login, logout} = useAuth(); // AuthContext'ten login ve logout fonksiyonlarını alıyoruz

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          login(token); // token gönderilmeli!
          Toast.show({
            type: 'success',
            position: 'top',
            text1: 'User logged in successfully!',
            text2: 'Welcome back!',
          });
        } else {
          logout();
        }
      } catch (error) {
        console.error('Error checking login status:', error);
        logout();
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Login failed!',
          text2: 'Please try again.',
        });
      }
    };

    checkLoginStatus();
  }, []);

  const {isAuthenticated} = useAuth(); // AuthContext'ten durumu alıyoruz

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor={'transparent'} translucent={true} />
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {isAuthenticated ? <Stack.Screen name="App" component={TabNavigator} /> : <Stack.Screen name="Auth" component={AuthNavigator} />}
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </GestureHandlerRootView>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
