// React
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
// Styles
import Colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import defaultStyles from '../../styles/defaultStyles';
// Libraries
// Components


export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Icon name="bike" size={48} color={Colors.light} />
      <Text style={defaultStyles.HeaderText}>HitBis</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
  },
});
