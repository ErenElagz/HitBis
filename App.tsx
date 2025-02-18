import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './src/navigators/AuthNavigator';
import TabNavigator from './src/navigators/TabNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  const userIsAuthenticated = true; // Kimlik doğrulama durumu.
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={'transparent'} translucent={true} />
      {userIsAuthenticated ? <Stack.Screen name="App" component={TabNavigator} /> : <Stack.Screen name="Auth" component={AuthNavigator} />}
    </NavigationContainer>
  );
}
