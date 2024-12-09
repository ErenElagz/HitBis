import {View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, ToastAndroid} from 'react-native';
import React, {useState, useEffect} from 'react';
import Colors from '../styles/colors';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GoogleGenerativeAI} from '@google/generative-ai';
import Markdown from 'react-native-markdown-display';
import Fonts from '../styles/fonts';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

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
    <View style={[styles.message, {backgroundColor: '#ffffff50'}]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
          <Icon name="robot" size={20} color="#fff" />
          <Text style={{fontWeight: 600, color: '#fff'}}>Biscuit</Text>
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
    <View style={[styles.message, {backgroundColor: '#ffffff25'}]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
          <Icon name="account" size={20} color="#fff" />
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
  const nav = useNavigation();
  const [inputText, setInputText] = useState('');
  const [listData, setListData] = useState<string[]>([]);
  const SearchInput = () => {
    setListData(prevList => [...prevList, inputText]);
    setInputText('');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', Colors.backgroundColor]}
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          opacity: 0.25,
        }}
      />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            nav.goBack();
          }}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Icon name="cookie" size={24} color="#fff" />

        <Text
          style={{
            fontSize: 24,
            fontFamily: Fonts.main,
            color: '#fff',
          }}>
          HitBis Assistant
        </Text>
      </View>
      <FlatList
        style={{padding: 16}}
        data={listData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View key={item}>
            <Message message={item} />
            <Response prompt={item} />
          </View>
        )}
      />
      <View style={styles.searchBar}>
        <TextInput placeholder="Ask to Biscuit  : )" style={styles.input} value={inputText} onChangeText={text => setInputText(text)} selectionColor={'#fff'}></TextInput>
        <TouchableOpacity onPress={SearchInput}>
          <Icon name="send" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="microphone" size={24} color="#fff" />
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
