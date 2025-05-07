import {TextInput, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface InputTextProps {
  placeholder: string;
  style?: object;
  value?: string;
  secureTextEntry?: boolean;
  error?: string;
  onChangeText?: (text: string) => void;
  showToggle?: boolean; // 🔥 göz ikonunu göster/gizle özelliği
}

const InputText: React.FC<InputTextProps> = ({placeholder, style, value, onChangeText, secureTextEntry, error, showToggle = false}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const shouldSecure = showToggle ? !isPasswordVisible : secureTextEntry;

  return (
    <View style={styles.wrapper}>
      <View style={[styles.inputContainer, error && styles.inputError]}>
        <TextInput
          style={[styles.inputText, style, {flex: 1}]}
          placeholder={placeholder}
          selectionColor={Colors.light}
          placeholderTextColor={Colors.light}
          secureTextEntry={shouldSecure}
          onChangeText={onChangeText}
          value={value}
        />
        {showToggle && (
          <TouchableOpacity onPress={() => setIsPasswordVisible(prev => !prev)}>
            <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} size={20} color={Colors.light} style={{marginHorizontal: 8}} />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.backgroundColorsSecondary,
    borderRadius: 16,
    paddingHorizontal: 12,
  },
  inputText: {
    paddingVertical: 20,
    color: Colors.light,
    fontSize: 14,
  },
  inputError: {
    borderColor: Colors.red,
    borderWidth: 1,
  },
  error: {
    color: Colors.red,
    fontSize: 12,
    marginTop: 4,
    marginLeft: 8,
  },
});

export default InputText;
