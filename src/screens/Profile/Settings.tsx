// React
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
// Styles
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// Libraries
import {useNavigation} from '@react-navigation/native';
// Components
import Button from '../../components/Button';
import InputText from '../../components/InputText';
import PageHeader from '../../components/PageHeader';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import {useAuth} from '../../Context/authContext';
import {logoutRequest} from '../../api/authService';

export default function SettingsScreen() {
  const {logout} = useAuth();
  const nav = useNavigation();

  const handleLogout = async () => {
    await logoutRequest();
    logout();
  };

  const handlePickFile = async () => {
    try {
      const pickedFile = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(pickedFile);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        throw err;
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
              <Image source={require('../../assets/images/avatar.jpg')} style={{width: 80, height: 80, borderRadius: 999}} />
              <TouchableOpacity onPress={handlePickFile} style={{position: 'absolute', right: 0, bottom: 0, padding: 8, borderRadius: 999, backgroundColor: Colors.primary}}>
                <Icon name="camera" size={20} color={Colors.dark} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 16, width: '100%', gap: 8, alignItems: 'center', paddingHorizontal: 16}}>
            <InputText placeholder="Username" />
            <InputText placeholder="Name" />
            <InputText placeholder="Surname" />
            <InputText placeholder="Email" />
            <Button type="secondary" title="Save" />
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
