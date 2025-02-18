import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Screens
import HomeScreen from '../screens/App/Home/Home';
import CreateRouteScreen from '../screens/App/Home/CreateRoute';
import RideScreen from '../screens/App/Home/Ride';
import EventScreen from '../screens/App/Home/Event';
import RouteScreen from '../screens/App/Home/Route';
import ProfileScreen from '../screens/App/Profile/Profile';
import SettingsScreen from '../screens/App/Profile/Settings';
import NotificationsScreen from '../screens/App/Profile/Notifications';
import RentScreen from '../screens/App/Rent/Rent';
import CameraScreen from '../screens/App/Rent/Camera';
import DetailsScreen from '../screens/App/Rent/Details';
import CommunityScreen from '../screens/App/Community/Community';
import SearchScreen from '../screens/App/Community/Search';
import CreateEventScreen from '../screens/App/Community/CreateEvent';
import AssistantScreen from '../screens/App/Assistant/Assistant';
import MapScreen from '../screens/App/Assistant/Map';
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
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Community" component={CommunityScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="CreateEvent" component={CreateEventScreen} />
      <Stack.Screen name="AssistantScreen" component={AssistantScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
}
