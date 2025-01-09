// React
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
// Styles
import Colors from '../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fonts from '../../styles/Fonts';
// Libraries
import {GoogleGenerativeAI} from '@google/generative-ai';
import Markdown from 'react-native-markdown-display';
import LinearGradient from 'react-native-linear-gradient';

export default function MapScreen() {
  const nav = useNavigation();
  const [inputText, setInputText] = useState('');
  const [listData, setListData] = useState<string[]>([]);
  const SearchInput = () => {
    setListData(prevList => [...prevList, inputText]);
    setInputText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="arrow-left"
          size={24}
          color="#fff"
          onPress={() => nav.goBack()}
        />
        <Text style={{fontSize: 24, color: '#fff', fontWeight: '600'}}>
          Biscuit
        </Text>
      </View>
      <FlatList
        data={listData}
        keyExtractor={item => item}
        renderItem={({item}) => <Response prompt={item} />}
      />
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          placeholderTextColor="#fff"
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity onPress={inputText ? SearchInput : showAlert}>
          <Icon name="send" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 32,
    padding: 16,
    gap: 8,
    borderBottomWidth: 1,
    borderColor: Colors.borderColor,
  },
  searchBar: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    gap: 16,
    borderTopWidth: 1,
    borderColor: Colors.borderColor,
  },
  input: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    color: '#fff',
  },
  message: {
    flexDirection: 'column',
    gap: 8,
    padding: 16,
    marginBottom: 8,
    borderRadius: 16,
  },
});
