import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ButtonProps {
  title?: string;
  onPress?: () => void;
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

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  button: {
    width: '100%',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.borderColor,
  },
});

export default Button;
