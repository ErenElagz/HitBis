import {TextInput, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './SearchBar.style';
import Colors from '../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface SearchBarProps {
  placeholder: string;
  onPress?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({placeholder, onPress}) => {
  return (
    <View style={styles.searchBar}>
      <TouchableOpacity onPress={onPress}>
        <Icon name="magnify" size={28} color={Colors.light} />
      </TouchableOpacity>
      <TextInput style={styles.inputText} placeholderTextColor={Colors.light} placeholder={placeholder} />
      <TouchableOpacity>
        <Icon name="microphone" size={28} color={Colors.light} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
