import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../styles/colors';

export default function RentCycleScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rent Cycle</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
  },
  text: {
    color: Colors.primary,
    fontSize: 20,
  },
});
