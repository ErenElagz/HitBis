import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/Home';
import NearMeScreen from '../screens/Home/NearMe';
import CreateRouteScreen from '../screens/Home/CreateRoute';
import RideTogetherScreen from '../screens/Home/RideTogether';
import RideScreenq from '../screens/Home/Ride';
const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeRouter" component={HomeScreen} />
      <Stack.Screen name="NearMe" component={NearMeScreen} />
      <Stack.Screen name="CreateRoute" component={CreateRouteScreen} />
      <Stack.Screen name="RideTogether" component={RideTogetherScreen} />
      <Stack.Screen name="Ride" component={RideScreenq} />
    </Stack.Navigator>
  );
}
