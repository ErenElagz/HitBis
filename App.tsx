import React from 'react';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
// Navigators
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './src/navigators/AuthNavigator';
import TabNavigator from './src/navigators/TabNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  const userIsAuthenticated = true;

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor={'transparent'} translucent={true} />
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {userIsAuthenticated ? <Stack.Screen name="App" component={TabNavigator} /> : <Stack.Screen name="Auth" component={AuthNavigator} />}
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
