import {TextInput, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../styles/Colors';

interface InputTextProps {
  placeholder: string;
  style?: object;
}

const InputText: React.FC<InputTextProps> = ({placeholder, style}) => {
  return <TextInput style={{...styles.inputText, ...style}} placeholder={placeholder} selectionColor={Colors.light} />;
};

const styles = StyleSheet.create({
  inputText: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: Colors.backgroundColorsSecondary,
    borderRadius: 16,
    color: Colors.light,
    fontSize: 14,
  },
});

export default InputText;
