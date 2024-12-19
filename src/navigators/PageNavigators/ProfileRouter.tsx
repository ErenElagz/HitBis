import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
// Screens
import MyProfileScreen from '../../screens/Profile/EditProfileScreen';
import NotificationsScreen from '../../screens/Profile/NotificationsScreen';
import SettingsScreen from '../../screens/Profile/SettingsScreen';
import ProfileScreen from '../../screens/Profile/ProfileScreen';
import ActivityHistoryScreen from '../../screens/Profile/ActivityHistory';

const Stack = createNativeStackNavigator();

export default function ProfileRouter() {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="MyProfileScreen" component={MyProfileScreen} />
      <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="ActivityHistoryScreen" component={ActivityHistoryScreen} />
    </Stack.Navigator>
  );
}
