import React from 'react';
import {View, Text} from 'react-native';
import Markdown from 'react-native-markdown-display';
import {GoogleGenerativeAI} from '@google/generative-ai';
import {useState, useEffect} from 'react';
import Button from '../../Button';
import styles from './Response.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

function Response(props: any) {
  const [generatedText, setGeneratedText] = useState('');
  const date = new Date();
  const genAI = new GoogleGenerativeAI('AIzaSyAowSxY3IYw4DimgOFWXxqqVnfbqcTwoHk');
  const nav = useNavigation();
  useEffect(() => {
    const fetchData = async () => {
      const model = genAI.getGenerativeModel({model: 'gemini-pro'});
      const extraPrompt =
        'Places must be in Turkey no extra information and it must be in json format but dont add first variable places bestplaces like this DONT ADD json must contain name, latitude, longitude, description, and image_url no more. example structure : [{"description": "", "latitude": number, "longitude": number, "name": "", "image_url": ""},{"description": "", "latitude": number, "longitude": number, "name": "", "image_url": ""},{"description": "", "latitude": number, "longitude": number, "name": "", "image_url": ""},{"description": "", "latitude": number, "longitude": number, "name": "", "image_url": ""},{"description": "", "latitude": number, "longitude": number, "name": "", "image_url": ""},{"description": "", "latitude": number, "longitude": number, "name": "", "image_url": ""}]';
      const prompt = props.prompt + extraPrompt;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();
      setGeneratedText(text);
    };
    fetchData();
  }, []);

  return (
    <View style={[styles.message, {backgroundColor: '#ffffff50'}]} key={props.prompt}>
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
      <Button
        type="secondary"
        title="See on the Map"
        onPress={() => {
          nav.navigate('Map' as never);
        }}
      />
    </View>
  );
}

export default Response;
