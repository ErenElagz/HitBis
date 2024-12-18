import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
// Screens
import RentCycleScreen from '../../screens/Rent/RentCycleScreen';
import QrScanScreen from '../../screens/Rent/QrScanScreen';
import RentSuccessfullScreen from '../../screens/Rent/RentSuccessfullScreen';
import EnjoyYourRideScreen from '../../screens/Rent/EnjoyYourRideScreen';
const Stack = createNativeStackNavigator();

export default function RentCycleRouters() {
  return (
    <Stack.Navigator
      initialRouteName="RentCycleScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="RentCycleScreen" component={RentCycleScreen} />
      <Stack.Screen name="QrScanScreen" component={QrScanScreen} />
      <Stack.Screen name="RentSuccessfullScreen" component={RentSuccessfullScreen} />
      <Stack.Screen name="EnjoyYourRideScreen" component={EnjoyYourRideScreen} />
    </Stack.Navigator>
  );
}
