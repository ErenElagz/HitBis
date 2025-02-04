import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProfileScreen from '../screens/Profile/Profile';
import EditProfileScreen from '../screens/Profile/EditProfile';
import SettingsScreen from '../screens/Profile/Settings';
import NotificationsScreen from '../screens/Profile/Notifications';

const Stack = createNativeStackNavigator();

export default function ProfileNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfileRouter" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
    </Stack.Navigator>
  );
}
