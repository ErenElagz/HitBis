import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Navigators
import HomeNavigator from './HomeNavigator';
import CommunityNavigator from './CommunityNavigator';
import RentNavigator from './RentNavigator';
import AssistantNavigator from './AssistantNavigator';
import ProfileNavigator from './ProfileNavigator';
// Styles
import Colors from '../styles/Colors';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.light,
        tabBarHoverColor: 'transparent',
        tabBarStyle: {
          height: 66,
          paddingTop: 8,
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: Colors.borderColor,
          backgroundColor: Colors.backgroundColor,
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Community" component={CommunityNavigator} />
      <Tab.Screen name="Rent" component={RentNavigator} />
      <Tab.Screen name="Assistant" component={AssistantNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
}
