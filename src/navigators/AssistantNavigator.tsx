import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Screens
import AssistantScreen from '../screens/Assistant/Assistant';
import MapScreen from '../screens/Assistant/Map';

const Stack = createNativeStackNavigator();

export default function AssistantNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AssistantScreen" component={AssistantScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
}
