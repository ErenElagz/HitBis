import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import RentCycleScreen from './src/screens/RentCycleScreen';
import CommunityScreen from './src/screens/CommunityScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import {Iconify} from 'react-native-iconify';

const Tab = createBottomTabNavigator();

const TabBarIcon = ({route}) => {
  if (route.name === 'Home') {
    return <Iconify icon="mdi:home" size={24} color="#900" />;
  } else if (route.name === 'Community') {
    return <Iconify icon="mdi:group" size={24} color="#900" />;
  } else if (route.name === 'RentCycle') {
    return <Iconify icon="mdi:car" size={24} color="#900" />;
  } else if (route.name === 'History') {
    return <Iconify icon="mdi:history" size={24} color="#900" />;
  } else if (route.name === 'Profile') {
    return <Iconify icon="mdi:user" size={24} color="#900" />;
  }
};

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#2196F3', // Active tab color
        tabBarInactiveTintColor: 'gray', // Inactive tab color
        tabBarStyle: {
          height: 72, // Height of the tab bar
          backgroundColor: '#000', // Background color
          alignItems: 'center', // Horizontal alignment
          justifyContent: 'center', // Vertical alignment
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontWeight: '600', // Optional: make text bold
          alignItems: 'center', // Horizontal alignment
        },
        tabBarIcon: props => <TabBarIcon {...props} route={route} />,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
      <Tab.Screen name="RentCycle" component={RentCycleScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
