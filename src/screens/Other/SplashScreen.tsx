import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../styles/colors';
import defaultStyles from '../../styles/defaultStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
