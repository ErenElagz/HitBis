import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
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
