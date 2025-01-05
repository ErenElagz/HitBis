import {TextInput} from 'react-native';
import React from 'react';
import styles from './InputText.style';
import Colors from '../../styles/colors';

interface InputTextProps {
  placeholder: string;
  value: string;
  onChangeText: Function;
  [key: string]: any;
}

const InputText: React.FC<InputTextProps> = ({placeholder, value, onChangeText, props}) => {
  return <TextInput style={styles.inputText} placeholder={placeholder} selectionColor={Colors.light} value={value} onChangeText={onChangeText} {...props} />;
};

export default InputText;
