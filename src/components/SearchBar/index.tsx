import {TextInput, View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../styles/Colors';

interface SearchBarProps {
  placeholder: string;
  onPress?: () => void;
  onChangeText?: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({placeholder, onPress, onChangeText}) => {
  return (
    <View style={styles.searchBar}>
      <TouchableOpacity onPress={onPress}>
        <Icon name="magnify" size={28} color={Colors.light} />
      </TouchableOpacity>
      <TextInput style={styles.inputText} placeholderTextColor={Colors.light} placeholder={placeholder} onChangeText={onChangeText} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    width: '100%',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 12,
    backgroundColor: Colors.backgroundColorsSecondary,
    borderRadius: 16,
  },
  inputText: {
    flex: 1,
    color: Colors.light,
    fontSize: 16,
  },
});

export default SearchBar;
