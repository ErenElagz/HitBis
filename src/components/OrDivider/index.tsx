import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../styles/Colors';
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    padding: 16,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: Colors.backgroundColorsSecondary,
  },
  text: {
    marginHorizontal: 8,
    fontSize: 12,
    color: Colors.light,
    opacity: 0.25,
  },
});

export default OrDivider;
