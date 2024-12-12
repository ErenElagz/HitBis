import React from 'react';
import {StatusBar} from 'react-native';
import RootNavigator from './src/navigators/RootNavigator';

export default function App() {
  return (
    <React.StrictMode>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <RootNavigator />
    </React.StrictMode>
);
}