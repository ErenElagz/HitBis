import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Screens
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RentCycleScreen from '../screens/RentCycleScreen';
import CommunityScreen from '../screens/CommunityScreen';
import AssistantScreen from '../screens/AssistantScreen';
import MapScreen from '../screens/MapScreen';
// Styles
import Colors from '../styles/colors';
// Components
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.light,
        tabBarStyle: {
          height: 66,
          paddingTop: 8,
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: Colors.borderColor,
          backgroundColor: Colors.backgroundColor,
        },
        headerShown: false,
        tabBarIcon(props) {
          let iconName = '';
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Community') {
            iconName = 'account-group';
          } else if (route.name === 'RentCycle') {
            iconName = 'bike';
          } else if (route.name === 'Assistant') {
            iconName = 'assistant';
          } else if (route.name === 'Profile') {
            iconName = 'account';
          }
          return <Icon name={iconName} size={props.size} color={props.color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
      <Tab.Screen name="RentCycle" component={RentCycleScreen} />
      <Tab.Screen name="Assistant" component={AssistantScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  );
}
