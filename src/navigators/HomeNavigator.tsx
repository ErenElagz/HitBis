import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Screens
import HomeScreen from '../screens/Home/Home';
import CreateRouteScreen from '../screens/Home/CreateRoute';
import RideScreen from '../screens/Home/Ride';
import EventScreen from '../screens/Home/Event';
import RouteScreen from '../screens/Home/Route';

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CreateRoute" component={CreateRouteScreen} />
      <Stack.Screen name="Ride" component={RideScreen} />
      <Stack.Screen name="Event" component={EventScreen} />
      <Stack.Screen name="Route" component={RouteScreen} />
    </Stack.Navigator>
  );
}
