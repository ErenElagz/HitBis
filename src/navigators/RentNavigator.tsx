import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RentScreen from '../screens/Rent/Rent';
import CameraScreen from '../screens/Rent/Camera';

const Stack = createNativeStackNavigator();

export default function RentNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Rent" component={RentScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
    </Stack.Navigator>
  );
}
