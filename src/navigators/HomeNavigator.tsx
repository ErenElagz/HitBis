import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/Home';
import NearMeScreen from '../screens/Home/NearMe';
import CreateRouteScreen from '../screens/Home/CreateRoute';

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeRouter" component={HomeScreen} />
      <Stack.Screen name="NearMe" component={NearMeScreen} />
      <Stack.Screen name="CreateRoute" component={CreateRouteScreen} />
    </Stack.Navigator>
  );
}
