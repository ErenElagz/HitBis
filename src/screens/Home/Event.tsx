import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../styles/Colors';
import {events} from '../../data/events';
export default function EventScreen(route: any) {
  const nav = useNavigation();

  return (
    <View>
      <Text>Event</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    padding: 16,
  },
});
