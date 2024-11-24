import {View, Text} from 'react-native';
import React from 'react';
import styles from './TextInput.style';

interface TextInputProps {}

const TextInput: React.FC<TextInputProps> = () => {
  return (
    <View>
      <Text>Textinput</Text>
    </View>
  );
};

export default TextInput;
