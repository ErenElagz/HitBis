import {View, Text} from 'react-native';
import React from 'react';
import styles from './Button.style';

interface ButtonProps {}

const Button: React.FC<ButtonProps> = () => {
  return (
    <View>
      <Text>Button</Text>
    </View>
  );
};

export default Button;
