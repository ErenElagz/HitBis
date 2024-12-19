import React from 'react';
import {StatusBar} from 'react-native';
import RootNavigator from './src/navigators/RootNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView>
      <StatusBar barStyle="light-content" backgroundColor={'transparent'} translucent={true} />
      <RootNavigator />
    </GestureHandlerRootView>
  );
}
