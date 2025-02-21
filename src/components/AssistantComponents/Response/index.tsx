import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GoogleGenerativeAI} from '@google/generative-ai';
import {useState, useEffect} from 'react';
import Button from '../../Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

function Response(props: any) {
  const [generatedText, setGeneratedText] = useState('');
  const date = new Date();
  const genAI = new GoogleGenerativeAI('AIzaSyDM1CVLLnxjv2ntZU6KU1T7QCj6HONPFhE');
  const nav = useNavigation();
  const [places, setPlaces] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const model = genAI.getGenerativeModel({model: 'gemini-pro'});
      const extraPrompt =
        'Places must be in Turkey no extra information and it must be in json format but dont add first variable places bestplaces like this DONT ADD json must contain name, latitude, longitude, description, and image_url no more. example structure : [{"description": "", "latitude": number, "longitude": number, "name": "", "image_url": ""},{"description": "", "latitude": number, "longitude": number, "name": "", "image_url": ""},{"description": "", "latitude": number, "longitude": number, "name": "", "image_url": ""},{"description": "", "latitude": number, "longitude": number, "name": "", "image_url": ""},{"description": "", "latitude": number, "longitude": number, "name": "", "image_url": ""},{"description": "", "latitude": number, "longitude": number, "name": "", "image_url": ""}]';
      const prompt = props.prompt + extraPrompt;
      const result = await model.generateContent(prompt);
      let response = result.response.text();

      // Remove the ```json and ``` parts
      if (response.startsWith('```json')) {
        response = response.substring(8); // Remove '```json\n'
      }
      if (response.endsWith('```')) {
        response = response.substring(0, response.length - 4); // Remove '\n```'
      }
      response = response.replace(/`/g, ''); // Remove backticks
      response = response.trim();
      response = JSON.parse(response);

      setPlaces(response);
      setGeneratedText(response);
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
      <View>
        {places &&
          places.map((place: any, index: number) => (
            <View key={index} style={styles.placesCard}>
              <Text style={styles.placesCardTitle}>{place.name}</Text>
              <Text style={styles.placesCardDescription}>{place.description}</Text>
            </View>
          ))}
      </View>
      <Button type="tertiary" title="See on the Map" onPress={() => nav.navigate('Map' as never, {places})} />
    </View>
  );
}

const styles = StyleSheet.create({
  message: {
    flexDirection: 'column',
    gap: 8,
    padding: 16,
    marginBottom: 8,
    borderRadius: 16,
  },
  placesCard: {
    backgroundColor: '#ffffff20',
    padding: 12,
    borderRadius: 16,
    marginBottom: 8,
  },
  placesCardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  placesCardDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: '#ffffffaa',
  },
});

export default Response;
