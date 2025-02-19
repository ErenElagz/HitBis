import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Styles
import Colors from '../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// Navigators
import HomeNavigator from './HomeNavigator';
import CommunityNavigator from './CommunityNavigator';
import RentNavigator from './RentNavigator';
import AssistantNavigator from './AssistantNavigator';
import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
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
          display: route.name === 'Ride' ? 'none' : 'flex',
        },
        headerShown: false,
        tabBarIcon(props) {
          let iconName = '';
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Community') {
            iconName = 'account-group';
          } else if (route.name === 'Rent') {
            iconName = 'bike';
          } else if (route.name === 'Assistant') {
            iconName = 'assistant';
          } else if (route.name === 'Profile') {
            iconName = 'account';
          }
          return <Icon name={iconName} size={props.size} color={props.color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Community" component={CommunityNavigator} />
      <Tab.Screen
        name="Rent"
        component={RentNavigator}
        options={{
          tabBarStyle: {display: 'none'},
        }}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.reset({
              index: 0,
              routes: [{name: 'Rent'}],
            });
          },
        })}
      />

      <Tab.Screen
        name="Assistant"
        component={AssistantNavigator}
        options={{
          tabBarStyle: {display: 'none'},
        }}
      />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
}
