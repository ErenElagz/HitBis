import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
// Screens
import MyProfileScreen from '../../screens/Profile/MyProfileScreen';
import NotificationsScreen from '../../screens/Profile/NotificationsScreen';
import SettingsScreen from '../../screens/Profile/SettingsScreen';
import ProfileScreen from '../../screens/Profile/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function ProfileRouter() {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="MyProfile" component={MyProfileScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
