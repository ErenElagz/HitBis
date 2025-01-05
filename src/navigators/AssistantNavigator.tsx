import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AssistantScreen from '../screens/Assistant/Assistant';

const Stack = createNativeStackNavigator();

export default function AssistantNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Assistant" component={AssistantScreen} />
    </Stack.Navigator>
  );
}
