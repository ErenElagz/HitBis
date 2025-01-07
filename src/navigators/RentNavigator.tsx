import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RentScreen from '../screens/Rent/Rent';
import CameraScreen from '../screens/Rent/Camera';
import DetailsScreen from '../screens/Rent/Details';
import SuccessfullScreen from '../screens/Rent/Successful';
const Stack = createNativeStackNavigator();

export default function RentNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="RentRouter" component={RentScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Successful" component={SuccessfullScreen} />
    </Stack.Navigator>
  );
}
