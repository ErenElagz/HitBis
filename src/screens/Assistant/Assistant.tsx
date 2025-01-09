// React
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, ToastAndroid, FlatList} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
// Styles
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
// Libraries
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

// Components
import Message from '../../components/AssistantComponents/Message';
import Response from '../../components/AssistantComponents/Response';

export default function AssistantScreen() {
  const nav = useNavigation();
  const alert = () => {
    ToastAndroid.show('Please enter a message', ToastAndroid.SHORT);
  };
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
      <View>
        <Text
          style={{
            marginTop: 32,
            marginLeft: 16,
            fontSize: 60,
            fontFamily: Fonts.main,
            letterSpacing: -1,
            fontWeight: 'bold',
            color: '#fff',
          }}>
          HitBis Assistant
        </Text>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexDirection: 'row', marginHorizontal: 8, marginLeft: 16, overflow: 'visible'}}>
            <TouchableOpacity style={styles.recommondation}>
              <Text style={styles.recommondationText}>Chat with Biscuit 🍪</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recommondation}>
              <Text style={styles.recommondationText}>Create a Route 🛣️</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recommondation}>
              <Text style={styles.recommondationText}>Get Recommendations 👌</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recommondation}>
              <Text style={styles.recommondationText}>Get Health Advice 💊</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}} // Search bar kadar boşluk bırakır
        style={{padding: 16}}
        data={listData}
        keyExtractor={(item, index) => `${item}-${index}`} // Generate unique key
        renderItem={({item, index}) => (
          <View key={`${item}-${index}`}>
            <Message message={item} />
            <Response prompt={item} />
          </View>
        )}
      />

      <View style={styles.searchBar}>
        <TextInput style={styles.input} placeholder="Type your message..." placeholderTextColor="#fff" value={inputText} onChangeText={setInputText} />
        <TouchableOpacity onPress={inputText ? SearchInput : alert}>
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
  backButton: {
    paddingTop: 32,
    padding: 16,
    gap: 8,
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
  recommondation: {
    padding: 12,
    backgroundColor: Colors.light,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  recommondationText: {
    color: '#000',
    fontWeight: '500',
  },
});
