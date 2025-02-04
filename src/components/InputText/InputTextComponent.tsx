import {TextInput} from 'react-native';
import React from 'react';
import styles from './InputText.style';
import Colors from '../../styles/Colors';

interface InputTextProps {
  placeholder: string;
  style?: object;
}

const InputText: React.FC<InputTextProps> = ({placeholder, style}) => {
  return <TextInput style={{...styles.inputText, ...style}} placeholder={placeholder} selectionColor={Colors.light} />;
};

export default InputText;
