import {TextInput, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import Colors from '../../styles/Colors';

interface InputTextProps {
  placeholder: string;
  style?: object;
  value?: string;
  secureTextEntry?: boolean;
  error?: string;
  onChangeText?: (text: string) => void;
}

const InputText: React.FC<InputTextProps> = ({placeholder, style, value, onChangeText, secureTextEntry, error}) => {
  return (
    <View>
      <TextInput
        style={{...styles.inputText, ...style}}
        placeholder={placeholder}
        selectionColor={Colors.light}
        placeholderTextColor={Colors.light}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
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
  error: {
    color: Colors.red,
    fontSize: 12,
    marginTop: 4,
    marginLeft: 8,
  },
});

export default InputText;
