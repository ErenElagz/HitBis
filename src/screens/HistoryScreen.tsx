import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../styles/colors';

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>History</Text>
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
    color: Colors.textColor,
    fontSize: 20,
  },
});
