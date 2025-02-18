import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Screens
import HomeScreen from '../screens/Home/Home';
import CreateRouteScreen from '../screens/Home/CreateRoute';
import RideScreen from '../screens/Home/Ride';
import EventScreen from '../screens/Home/Event';
import RouteScreen from '../screens/Home/Route';
import ProfileScreen from '../screens/Profile/Profile';
import SettingsScreen from '../screens/Profile/Settings';
import NotificationsScreen from '../screens/Profile/Notifications';
import RentScreen from '../screens/Rent/Rent';
import CameraScreen from '../screens/Rent/Camera';
import DetailsScreen from '../screens/Rent/Details';
import CommunityScreen from '../screens/Community/Community';
import SearchScreen from '../screens/Community/Search';
import CreateEvent from '../screens/Community/CreateEvent';
import AssistantScreen from '../screens/Assistant/Assistant';
import MapScreen from '../screens/Assistant/Map';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CreateRoute" component={CreateRouteScreen} />
      <Stack.Screen name="Ride" component={RideScreen} />
      <Stack.Screen name="Event" component={EventScreen} />
      <Stack.Screen name="Route" component={RouteScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Rent" component={RentScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Community" component={CommunityScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="CreateEvent" component={CreateEvent} />
      <Stack.Screen name="AssistantScreen" component={AssistantScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
}
