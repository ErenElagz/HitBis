import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Screens
import CommunityScreen from '../screens/Community/Community';
import CreateEventScreen from '../screens/Community/CreateEvent';
import SearchScreen from '../screens/Community/Search';
import RouteScreen from '../screens/Home/Route';
import GroupDetailScreen from '../screens/Community/GroupDetails';

const Stack = createNativeStackNavigator();

export default function CommunityNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="CommunityScreen" component={CommunityScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="CreateEvent" component={CreateEventScreen} />
      <Stack.Screen name="Route" component={RouteScreen} />
      <Stack.Screen name="GroupDetail" component={GroupDetailScreen} />
    </Stack.Navigator>
  );
}
