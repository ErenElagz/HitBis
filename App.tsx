import React from 'react';
import {StatusBar} from 'react-native';
import RootNavigator from './src/navigators/RootNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <StatusBar barStyle="light-content" backgroundColor={'transparent'} translucent={true} />
        <RootNavigator />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
