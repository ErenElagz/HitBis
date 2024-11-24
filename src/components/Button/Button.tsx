import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './Button.style';
import Colors from '../../styles/colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
  type?: 'primary' | 'secondary' | 'tertiary';
}

const Button: React.FC<ButtonProps> = ({title, onPress, type = 'primary'}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        type === 'primary'
          ? {backgroundColor: Colors.primary}
          : type === 'secondary'
          ? {backgroundColor: Colors.secondary}
          : type === 'tertiary'
          ? {backgroundColor: Colors.tertiary}
          : {backgroundColor: Colors.primary},
      ]}
      onPress={onPress}>
      <Text style={[styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
