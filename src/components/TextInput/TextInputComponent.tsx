import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './TextInputComponent.style';

interface TextInputComponentProps {
  placeholder: any;
  value: any;
  style: {};
}

const TextInputComponent: React.FC<TextInputComponentProps> = ({
  placeholder,
  value,
  style,
}) => {
  return <TextInput style={styles.textInput} placeholder={placeholder} />;
};

export default TextInputComponent;
