import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './Button.style';

const Button = ({
  title = 'Button',
  onPress = () => {},
  style = {},
  textStyle = ['light', 'dark', 'link', 'disabled'],
  disabled = false,
  type = ['primary', 'secondary', 'tertiary', 'link', 'disabled'],
  align = ['center', 'left', 'right'],
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[type],
        style,
        align === 'left'
          ? {alignSelf: 'flex-start'}
          : align === 'right'
          ? {alignSelf: 'flex-end'}
          : {alignSelf: 'center'},
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text
        style={[
          styles.text,
          type === 'link' ? styles.link : styles[textStyle],
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
