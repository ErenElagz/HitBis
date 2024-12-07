import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Colors from '../styles/colors';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GoogleGenerativeAI} from '@google/generative-ai';
import Markdown from 'react-native-markdown-display';
import Fonts from '../styles/fonts';
import {useNavigation} from '@react-navigation/native';

const date = new Date();
const API_KEY = 'AIzaSyAowSxY3IYw4DimgOFWXxqqVnfbqcTwoHk';
const genAI = new GoogleGenerativeAI(API_KEY);

function Response(props: any) {
  const [generatedText, setGeneratedText] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const model = genAI.getGenerativeModel({model: 'gemini-pro'});
      const prompt = props.prompt;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();
      setGeneratedText(text);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.message}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
          <Text style={{fontWeight: 600, color: '#fff'}}>Gemini</Text>
        </View>
        <Text style={{fontSize: 10, fontWeight: '600', color: '#fff'}}>
          {date.getHours()}:{date.getMinutes()}
        </Text>
      </View>
      <Markdown
        rules={{
          text: ({content}: any) => {
            return <Text style={{color: '#fff'}}>{content}</Text>;
          },
        }}>
        {generatedText}
      </Markdown>
    </View>
  );
}

function Message(props: any) {
  return (
    <View style={styles.message}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
          <Text style={{fontWeight: 500, color: '#fff'}}>Username</Text>
        </View>
        <Text style={{fontSize: 10, fontWeight: 600, color: '#fff'}}>
          {date.getHours()}:{date.getMinutes()}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 14,
          width: '100%',
          flex: 1,
          paddingLeft: 0,
          color: '#fff',
        }}>
        {props.message}
      </Text>
    </View>
  );
}

export default function AssistantScreen() {
  const [inputText, setInputText] = useState('');
  const [listData, setListData] = useState<string[]>([]);
  const SearchInput = () => {
    setListData(prevList => [...prevList, inputText]);
    setInputText('');
  };

  const nav = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon
          name="arrow-left"
          size={24}
          color="#fff"
          onPress={() => {
            nav.goBack();
          }}
        />
        <Text
          style={{
            fontSize: 24,
            fontFamily: Fonts.main,
            fontWeight: '800',
            color: '#fff',
          }}>
          HitBis Assistant
        </Text>
      </View>

      {/* Content */}
      <FlatList
        style={{paddingHorizontal: 16}}
        data={listData}
        renderItem={({item}) => (
          <View>
            <Message message={item} />
            <Response prompt={item} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* Search-Bar */}
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Ask to Gemini AI"
          style={styles.input}
          value={inputText}
          onChangeText={text => setInputText(text)}
          selectionColor={'#fff'}></TextInput>
        <TouchableOpacity onPress={SearchInput}>
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
    backgroundColor: Colors.backgroundColor,
    borderBottomWidth: 1
    ,
    borderColor: Colors.borderColor,
  },

  icon: {
    width: 32,
    height: 32,
  },
  searchBar: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 16,
    borderTopWidth: 1,
    borderColor: Colors.borderColor,
  },
  input: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
    fontSize: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 0.1,
    borderColor: '#fff',
    color: '#fff',
  },
  message: {
    flexDirection: 'column',
    gap: 8,
    backgroundColor: '#323232',
    marginBottom: 8,
    padding: 16,
    borderRadius: 16,
    color: '#fff',
  },
});
