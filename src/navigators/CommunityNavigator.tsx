import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CommunityScreen from '../screens/Community/Community';
import SearchScreen from '../screens/Community/Search';

const Stack = createNativeStackNavigator();

export default function CommunityNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="CommunityRouter" component={CommunityScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
}
