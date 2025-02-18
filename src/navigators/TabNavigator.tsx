import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Styles
import Colors from '../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// Navigators
import HomeScreen from '../screens/Home/Home';
import CommunityScreen from '../screens/Community/Community';
import RentScreen from '../screens/Rent/Rent';
import AssistantScreen from '../screens/Assistant/Assistant';
import Profile from '../screens/Profile/Profile';

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
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
      <Tab.Screen
        name="Rent"
        component={RentScreen}
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
        component={AssistantScreen}
        options={{
          tabBarStyle: {display: 'none'},
        }}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
