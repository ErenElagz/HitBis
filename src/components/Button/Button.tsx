import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './Button.style';

const Button = ({
  title = 'Button',
  onPress = () => {},
  style = {},
  textStyle = ['light', 'dark', 'link', 'disabled'],
  disabled = false,
  type = ['primary', 'secondary','tertiary', 'link', 'disabled'],
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles[type], style]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.text, styles[textStyle]]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
