import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigators/MainNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={'transparent'} translucent={true} />
      <MainNavigator />
    </NavigationContainer>
  );
}
