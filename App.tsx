import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import RootNavigator from './src/navigators/RootNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor={'transparent'} translucent={true} />
        <RootNavigator />
      </Provider>
    </GestureHandlerRootView>
  );
}
