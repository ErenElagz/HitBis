import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
export default function ResetPasswordScreen() {
  return (
    <View style={styles.container}>
      <Text>ForgotPassword Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    fontFamily: Fonts.interRegular,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
