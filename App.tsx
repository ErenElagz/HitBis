import React from 'react';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
// Navigators
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './src/navigators/AuthNavigator';
import TabNavigator from './src/navigators/TabNavigator';
// Context
import {AuthProvider, useAuth} from './src/Context/authContext';

const Stack = createNativeStackNavigator();

const AppContent = () => {
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
