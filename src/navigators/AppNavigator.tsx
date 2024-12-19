import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Screens
import HomeScreen from '../screens/HomeScreen';
import ProfileRouter from './PageNavigators/ProfileRouter';
import CommunityScreen from '../screens/Community/CommunityScreen';
import AssistantScreen from '../screens/Assistant/AssistantScreen';
import RentCycleRouters from './PageNavigators/RentCycleRouter';
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
        tabBarHoverColor: Colors.primary,
        tabBarStyle: {
          height: 66,
          paddingTop: 8,
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: Colors.borderColor,
          backgroundColor: Colors.backgroundColor,
          display: route.name === 'Home' || route.name === 'Community' || route.name === 'Profile' ? 'flex' : 'none',
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
      <Tab.Screen name="RentCycle" component={RentCycleRouters} />
      <Tab.Screen name="Assistant" component={AssistantScreen} />
      <Tab.Screen name="Profile" component={ProfileRouter} />
    </Tab.Navigator>
  );
}
