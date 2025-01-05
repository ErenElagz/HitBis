import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// Navigators
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import {useSelector} from 'react-redux';
import {selectIsAuthenticated} from '../redux/selectors/authSelectors';

export default function RootNavigator() {
  const isLoggedIn = useSelector(selectIsAuthenticated);

  return <NavigationContainer>{isLoggedIn ? <AppNavigator /> : <AuthNavigator />}</NavigationContainer>;
}
