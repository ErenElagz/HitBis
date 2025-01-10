import {TextInput} from 'react-native';
import React from 'react';
import styles from './InputText.style';
import Colors from '../../styles/Colors';

interface InputTextProps {
  placeholder: string;
  value: string;
  onChangeText: Function;
  secureTextEntry?: boolean;
  [key: string]: any;
}

const InputText: React.FC<InputTextProps> = ({placeholder, value, onChangeText, secureTextEntry, props}) => {
  return (
    <TextInput
      style={styles.inputText}
      placeholder={placeholder}
      selectionColor={Colors.light}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      {...props}
    />
  );
};

export default InputText;
