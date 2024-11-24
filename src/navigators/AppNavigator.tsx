import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Screens
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RentCycleScreen from '../screens/RentCycleScreen';
import CommunityScreen from '../screens/CommunityScreen';
import AssistantScreen from '../screens/AssistantScreen';
// Styles
import Colors from '../styles/colors';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.light,
          tabBarStyle: {
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: Colors.borderColor,
            backgroundColor: Colors.backgroundColor,
          },
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Community" component={CommunityScreen} />
        <Tab.Screen name="RentCycle" component={RentCycleScreen} />
        <Tab.Screen name="Assistant" component={AssistantScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
  );
}
