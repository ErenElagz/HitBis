import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../styles/colors';

export default function RentSuccessfullScreen({route}:any) {
  const {codes} = route.params;
  console.log(codes);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>RentSuccessfullScreen</Text>
      <Text style={styles.text}>{codes}</Text>
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
