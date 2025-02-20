import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Colors from '../../styles/Colors';
import {useNavigation} from '@react-navigation/native';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fonts from '../../styles/Fonts';

export default function CreateEventScreen() {
  const nav = useNavigation();

  const [eventName, setEventName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [participants, setParticipants] = useState('');
  const [difficulty, setDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Medium');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleCreateEvent = () => {
    if (!eventName || !description || !location || !participants) {
      Alert.alert('Eror', 'Please Fill All Fields!');
      return;
    }

    Alert.alert('Success', 'Event Created!');
    nav.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        onPress={() => nav.goBack()}
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: 8,
        }}>
        <Icon name="arrow-left" size={24} color={Colors.light} />
        <Text
          style={{
            color: Colors.light,
            fontSize: 20,
            fontFamily: Fonts.interBold,
          }}>
          Create Event
        </Text>
      </TouchableOpacity>

      {/* Etkinlik Adı */}
      <InputText placeholder="Event Name" value={eventName} onChangeText={setEventName} />

      {/* Açıklama */}
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Description"
        placeholderTextColor="#aaa"
        multiline
        numberOfLines={6}
        value={description}
        onChangeText={setDescription}
      />

      {/* Konum */}
      <InputText placeholder="Location" value={location} onChangeText={setLocation} />

      {/* Katılımcı Sayısı */}
      <InputText placeholder="Participants" value={participants} onChangeText={setParticipants} />

      {/* Tarih Seçici (React Native Date Picker) */}
      <TouchableOpacity onPress={() => setOpen(true)} style={styles.datePicker}>
        <Text style={styles.dateText}>📅 {date.toDateString()}</Text>
      </TouchableOpacity>

      <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        onConfirm={selectedDate => {
          setOpen(false);
          setDate(selectedDate);
        }}
        onCancel={() => setOpen(false)}
      />

      {/* Zorluk Seçici */}
      <View style={styles.difficultyContainer}>
        <Text style={styles.difficultyText}>Zorluk:</Text>
        {['Easy', 'Medium', 'Hard'].map(level => (
          <TouchableOpacity
            key={level}
            style={[styles.difficultyButton, difficulty === level && styles.difficultySelected]}
            onPress={() => setDifficulty(level as 'Easy' | 'Medium' | 'Hard')}>
            <Text style={styles.difficultyLabel}>{level}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Etkinlik Oluştur Butonu */}
      <Button title="Create an Event" icon="plus" onPress={handleCreateEvent} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 40,
    gap: 12,
    backgroundColor: Colors.backgroundColor,
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: Colors.primary,
  },
  input: {
    height: 80,
    borderRadius: 16,
    paddingHorizontal: 10,
    fontSize: 14,
    color: '#fff',
    backgroundColor: Colors.backgroundColorsSecondary,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  datePicker: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backgroundColorsSecondary,
    borderRadius: 16,
    marginBottom: 10,
  },
  dateText: {
    fontSize: 16,
    color: Colors.primary,
  },
  difficultyContainer: {
    flexDirection: 'row',
    paddingLeft: 20,
    marginBottom: 20,
  },
  difficultyText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
    alignSelf: 'center',
  },
  difficultyButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: Colors.backgroundColorsSecondary,
    marginHorizontal: 5,
  },
  difficultySelected: {
    backgroundColor: Colors.primary,
  },
  difficultyLabel: {
    fontSize: 16,
    color: '#fff',
  },
  createButton: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  createButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
