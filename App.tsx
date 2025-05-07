import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
// Navigators
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './src/navigators/AuthNavigator';
import TabNavigator from './src/navigators/TabNavigator';
// Context
import {AuthProvider, useAuth} from './src/Context/authContext';
// AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const AppContent = () => {
  const {login, logout} = useAuth(); // AuthContext'ten login ve logout fonksiyonlarını alıyoruz

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('token'); // Token'ı AsyncStorage'dan alıyoruz
        if (token) {
          login(token); // Eğer token varsa login fonksiyonunu çağırıyoruz
        } else {
          logout(); // Eğer token yoksa logout fonksiyonunu çağırıyoruz
        }
      } catch (error) {
        console.error('Error checking login status:', error); // Hata durumunda konsola hata mesajını yazdırıyoruz
        logout(); // Hata durumunda logout fonksiyonunu çağırıyoruz
      }
    };

    checkLoginStatus(); // Bileşen yüklendiğinde login durumunu kontrol ediyoruz
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
