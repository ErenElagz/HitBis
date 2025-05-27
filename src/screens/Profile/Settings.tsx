import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import {useAuth} from '../../Context/authContext';
import {logoutRequest} from '../../api/authService';
import {updateUser} from '../../api/userService';
import PageHeader from '../../components/PageHeader';
import DocumentPicker from 'react-native-document-picker';
import {useNavigation} from '@react-navigation/native';
import {getUser} from '../../api/userService';
import {uploadUserAvatar} from '../../api/userService';
import Toast from 'react-native-toast-message';

export default function SettingsScreen() {
  const nav = useNavigation();
  const {logout} = useAuth();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [weight, setWeight] = useState('');
  const [lenght, setLenght] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [userData, setUserData] = useState<any>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [imageURL, setImageURL] = useState('');

  const getUserFromApi = async () => {
    try {
      const userData = await getUser();
      setUserData(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    getUserFromApi();
  }, []);

  useEffect(() => {
    if (userData) {
      setName(userData.name || '');
      setSurname(userData.surname || '');
      setEmail(userData.email || '');
      setUsername(userData.username || '');
      setAge(userData.age?.toString() || '');
      setWeight(userData.weight?.toString() || '');
      setLenght(userData.lenght?.toString() || '');
      setImageURL(userData.avatar || '');
    }
  }, [userData]);

  const handleUpdate = async () => {
    if (isSaving) return;
    setIsSaving(true);

    const updatedFields: any = {};

    if (name !== userData.name) updatedFields.name = name;
    if (surname !== userData.surname) updatedFields.surname = surname;
    if (email !== userData.email) updatedFields.email = email;
    if (age !== userData.age) updatedFields.age = age;
    if (weight !== userData.weight) updatedFields.weight = weight;
    if (lenght !== userData.lenght) updatedFields.lenght = lenght;
    if (username !== userData.username) updatedFields.username = username;

    if (Object.keys(updatedFields).length === 0) {
      Toast.show({
        type: 'info',
        text1: 'No Changes',
        text2: 'No information has been modified.',
      });
      setError('No changes detected.');
      setIsSaving(false);
      return;
    }

    try {
      const updatedUser = await updateUser(updatedFields);
      if (updatedUser) {
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Your profile has been updated. ',
        });
        setMessage('Your information has been updated.');
        setError('');
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Something went wrong while updating your profile.',
        });
        setMessage('');
        setError('Failed to update information.');
      }
    } catch (error) {
      setMessage('');
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = async () => {
    await logoutRequest();
    logout();
  };

  const handleUpload = async pickedFile => {
    try {
      const response = await uploadUserAvatar(pickedFile);

      const avatarUrl = response.avatar;

      Toast.show({
        type: 'success',
        text1: 'Upload Successful',
        text2: 'Profile picture updated!',
      });

      setImageURL(avatarUrl);

      updateUser({avatar: response.data});
    } catch (err) {
      console.error('Upload failed', err);
      Toast.show({
        type: 'error',
        text1: 'Upload Failed',
        text2: 'Please try again.',
      });
    }
  };

  const handlePickFile = async () => {
    try {
      const pickedFile = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      });

      await handleUpload(pickedFile);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled picker');
      } else {
        console.error(err);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <PageHeader title="Settings" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={{marginTop: 32, width: '100%', gap: 8, alignItems: 'center'}}>
            <View style={{padding: 4, borderRadius: 999, backgroundColor: Colors.primary}}>
              <Image
                source={
                  imageURL ? {uri: imageURL} : require('../../assets/images/avatar.jpg') // fallback
                }
                style={{width: 80, height: 80, borderRadius: 999}}
              />
              <TouchableOpacity onPress={handlePickFile} style={{position: 'absolute', right: 0, bottom: 0, padding: 8, borderRadius: 999, backgroundColor: Colors.primary}}>
                <Icon name="camera" size={20} color={Colors.dark} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{marginTop: 16, width: '100%', gap: 8, alignItems: 'center', paddingHorizontal: 16}}>
            <InputText placeholder="Username" value={username} onChangeText={setUsername} />
            <InputText placeholder="Name" value={name} onChangeText={setName} />
            <InputText placeholder="Surname" value={surname} onChangeText={setSurname} />
            <InputText placeholder="Email" value={email} onChangeText={setEmail} />
            <View style={{flexDirection: 'column', gap: 8, width: '100%'}}>
              <InputText placeholder="Lenght" value={lenght} onChangeText={setLenght} />
              <InputText placeholder="Weight" value={weight} onChangeText={setWeight} />
            </View>
            <InputText placeholder="Age" value={age} onChangeText={setAge} />
            <Button type="secondary" title="Save" onPress={handleUpdate} loading={isSaving} disabled={isSaving} />
            <Button title="Log out" onPress={handleLogout} type="tertiary" icon="logout" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: Colors.backgroundColor,
  },
});
