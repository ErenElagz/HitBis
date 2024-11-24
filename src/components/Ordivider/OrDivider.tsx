import {View, Text} from 'react-native';
import React from 'react';
import styles from './OrDivider.style';

interface OrDividerProps {}

const OrDivider: React.FC<OrDividerProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>Or</Text>
      <View style={styles.line} />
    </View>
  );
};

export default OrDivider;
