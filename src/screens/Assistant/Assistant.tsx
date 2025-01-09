import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fonts from '../../styles/Fonts';
import {GoogleGenerativeAI} from '@google/generative-ai';
import Markdown from 'react-native-markdown-display';
import LinearGradient from 'react-native-linear-gradient';

const genAI = new GoogleGenerativeAI('AIzaSyAowSxY3IYw4DimgOFWXxqqVnfbqcTwoHk');

function Response({prompt}) {
  const [generatedText, setGeneratedText] = useState('');
  const [places, setPlaces] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const model = genAI.getGenerativeModel({model: 'gemini-pro'});
        const promptText =
          'Places must be in Turkey no extra information and it must be in json format but dont add first variable places bestplaces like this DONT ADD json must contain name, latitude, longitude, description, and image_url no more.';
        const result = await model.generateContent(prompt + promptText);
        let response = await result.response.text();
        console.log(response);
        if (response.startsWith('```json')) {
          response = response.substring(8);
        }
        if (response.endsWith('```')) {
          response = response.substring(0, response.length - 4);
        }
        try {
          response = JSON.parse(response.trim());
          setPlaces(response);
          setGeneratedText(response);
        } catch (jsonError) {
          setGeneratedText(response);
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [prompt]);

  if (isLoading) {
    return <ActivityIndicator size="small" color="#000" />;
  }

  return (
    <View style={[styles.message, {backgroundColor: '#ffffff50'}]}>
      <View style={styles.bubbleHeader}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
          <Icon name="robot" size={20} color="#fff" />
          <Text style={{fontWeight: 600, color: '#fff'}}>Biscuit</Text>
        </View>
        <Text style={{fontSize: 10, fontWeight: '600', color: '#fff'}}>
          {new Date().toLocaleTimeString()}
        </Text>
      </View>
      <View style={{padding: 20}}>
        {places &&
          places.map((place, index) => (
            <View key={index} style={styles.placeCard}>
              <Text style={styles.placeName}>{place.name}</Text>
              <Text style={styles.placeDescription}>{place.description}</Text>
              <Text style={styles.placeCoord}>Lat: {place.latitude}</Text>
              <Text style={styles.placeCoord}>Long: {place.longitude}</Text>
            </View>
          ))}
      </View>
    </View>
  );
}

function Message({message}) {
  return (
    <View style={[styles.message, {backgroundColor: '#ffffff25'}]}>
      <View style={styles.bubbleHeader}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
          <Icon name="account" size={20} color="#fff" />
          <Text style={{fontWeight: 500, color: '#fff'}}>Username</Text>
        </View>
        <Text style={{fontSize: 10, fontWeight: 600, color: '#fff'}}>
          {new Date().toLocaleTimeString()}
        </Text>
      </View>
      <Text style={styles.messageText}>{message}</Text>
    </View>
  );
}

export default function AssistantScreen() {
  const nav = useNavigation();
  const [inputText, setInputText] = useState('');
  const [listData, setListData] = useState([]);

  const SearchInput = () => {
    if (!inputText.trim()) {
      ToastAndroid.show('Please write your message', ToastAndroid.SHORT);
      return;
    }
    setListData(prevList => [...prevList, inputText]);
    setInputText('');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', Colors.backgroundColor]}
        style={styles.background}
      />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => nav.goBack()}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>HitBis Assistant</Text>
      </View>
      <FlatList
        style={{padding: 16}}
        data={listData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View>
            <Message message={item} />
            <Response prompt={item} />
          </View>
        )}
      />
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Ask to Biscuit :)"
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          selectionColor={'#fff'}
        />
        <TouchableOpacity onPress={SearchInput}>
          <Icon name="send" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.backgroundColor},
  background: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: 0.25,
  },
  header: {flexDirection: 'row', alignItems: 'center', padding: 16},
  headerText: {
    fontSize: 24,
    fontFamily: Fonts.main,
    color: '#fff',
    marginLeft: 8,
  },
  bubbleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderColor: Colors.borderColor,
  },
  input: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    color: '#fff',
  },
  message: {marginBottom: 16, padding: 16, borderRadius: 16},
  placeCard: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    marginVertical: 8,
  },
  placeName: {fontSize: 18, fontWeight: '700', color: '#000'},
  placeDescription: {fontSize: 16, fontWeight: '400', color: '#aaa'},
  placeCoord: {fontSize: 16, color: '#000', marginVertical: 4},
  messageText: {fontSize: 14, color: '#fff'},
});
