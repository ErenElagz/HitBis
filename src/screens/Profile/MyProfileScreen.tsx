import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

export default function MyProfileScreen() {
  const nav = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        My Profile Page
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
    backgroundColor: Colors.backgroundColor,
  },
  text: {
    color: Colors.light,
    fontSize: 20,
    fontFamily: Fonts.main,
  }
});
