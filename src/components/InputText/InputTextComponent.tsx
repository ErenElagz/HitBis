import {TextInput} from 'react-native';
import React from 'react';
import styles from './InputText.style';
import Colors from '../../styles/colors';

interface InputTextProps {
  placeholder: string;
}

const InputText: React.FC<InputTextProps> = ({placeholder}) => {
  return (
    <TextInput
      style={styles.inputText}
      placeholder={placeholder}
      selectionColor={Colors.light}
    />
  );
};

export default InputText;
