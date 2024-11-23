import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RentCycleScreen from '../screens/RentCycleScreen';
import CommunityScreen from '../screens/CommunityScreen';
import AssistantScreen from '../screens/AssistantScreen';

const Tab = createBottomTabNavigator();

export function BottomTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarActiveTintColor: '#45BD89',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            height: 66,
            backgroundColor: '#001110',
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: '#505050',
            paddingTop: 10,
          },
          headerShown: false,
          tabBarLabelStyle: {
            fontWeight: '600',
            alignItems: 'center',
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Community" component={CommunityScreen} />
        <Tab.Screen name="RentCycle" component={RentCycleScreen} />
        <Tab.Screen name="Assistant" component={AssistantScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
