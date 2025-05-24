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
        // Hem token hem user verisini aynı anda al
        const [token, userData] = await AsyncStorage.multiGet(['token', 'user']);

        if (token[1] && userData[1]) {
          // User verisini parse et ve login yap
          const user = JSON.parse(userData[1]);
          login(token[1], user); // Artık hem token hem user gerekiyor

          Toast.show({
            type: 'success',
            position: 'top',
            text1: 'Oturum açıldı',
            text2: `Hoş geldiniz ${user.name}`,
          });
        } else {
          await logout();
        }
      } catch (error) {
        console.error('Oturum kontrol hatası:', error);
        await logout();
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Otomatik giriş başarısız',
          text2: 'Lütfen tekrar giriş yapın',
        });
      }
    };

    checkLoginStatus();
  }, []);

  const {isAuthenticated} = useAuth();

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
