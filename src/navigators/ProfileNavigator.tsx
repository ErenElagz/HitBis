import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Screens
import ProfileScreen from '../screens/Profile/Profile';
import SettingsScreen from '../screens/Profile/Settings';
import NotificationsScreen from '../screens/Profile/Notifications';

const Stack = createNativeStackNavigator();

export default function ProfileNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
    </Stack.Navigator>
  );
}
