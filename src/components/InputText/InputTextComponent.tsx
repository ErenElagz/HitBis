import {TextInput} from 'react-native';
import React from 'react';
import styles from './InputTextComponent.style';
import Colors from '../../styles/colors';

interface InputTextComponentProps {
  placeholder: any;
}

const InputTextComponent: React.FC<InputTextComponentProps> = ({
  placeholder,
}) => {
  return (
    <TextInput
      style={styles.inputText}
      placeholder={placeholder}
      selectionColor={Colors.light}
    />
  );
};

export default InputTextComponent;
