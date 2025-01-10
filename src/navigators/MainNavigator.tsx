import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppNavigator from './AppNavigator.tsx';
import AuthNavigator from './AuthNavigator.tsx';
import {useSelector} from 'react-redux';
import {selectIsAuthenticated} from '../redux/selectors/authSelectors.js';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const userIsAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {userIsAuthenticated ? <Stack.Screen name="App" component={AppNavigator} /> : <Stack.Screen name="Auth" component={AuthNavigator} />}
    </Stack.Navigator>
  );
}
