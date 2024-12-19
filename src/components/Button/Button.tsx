import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './Button.style';
import Colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ButtonProps {
  title?: string;
  onPress: () => void;
  type?: 'primary' | 'secondary' | 'tertiary';
  style?: object;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({title, onPress, type = 'primary', style, icon}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        type === 'primary'
          ? {backgroundColor: Colors.primary}
          : type === 'secondary'
          ? {backgroundColor: Colors.secondary}
          : type === 'tertiary'
          ? {backgroundColor: Colors.backgroundColor}
          : {backgroundColor: Colors.primary},
        style,
      ]}
      onPress={onPress}>
      {icon && <Icon name={icon} size={20} color={Colors.light} />}
      {title && <Text style={[styles.text]}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default Button;
