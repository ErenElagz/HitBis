import React from 'react';
import {TouchableOpacity, Text, StyleSheet, ActivityIndicator} from 'react-native';
import Colors from '../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ButtonProps {
  title?: string;
  onPress?: () => void;
  type?: 'primary' | 'secondary' | 'tertiary';
  style?: object;
  disabled?: boolean;
  icon?: string;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({title, onPress, type = 'primary', style, icon, disabled, loading}) => {
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
        disabled && {opacity: 0.5}, // opsiyonel stil: disable durumunda soluklaştır
      ]}
      onPress={onPress}
      disabled={disabled}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <>
          {icon && <Icon name={icon} size={20} color={Colors.light} />}
          {title && <Text style={styles.text}>{title}</Text>}
        </>
      )}
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
