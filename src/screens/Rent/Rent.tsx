import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
export default function RentScreen() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: Colors.primary,
        }}>
        Rent Screen
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
