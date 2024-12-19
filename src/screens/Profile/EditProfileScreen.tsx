// React
import {View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
// Styles
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// Libraries
import {useNavigation} from '@react-navigation/native';
// Components
import InputText from '../../components/InputText';
import Button from '../../components/Button';

export default function EditProfileScreen() {
  const nav = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => nav.goBack()} style={{flexDirection: 'row', alignItems: 'flex-start', gap: 8, paddingLeft: 20}}>
        <Icon name="arrow-left" size={20} color={Colors.light} />
        <Text
          style={{
            color: Colors.light,
            fontSize: 20,
            fontFamily: Fonts.interBold,
          }}>
          Edit Profile
        </Text>
      </TouchableOpacity>

      <View style={{marginTop: 32, width: '100%', gap: 8, alignItems: 'center'}}>
        <View style={{padding: 12, borderRadius: 999, backgroundColor: Colors.backgroundColorSecondary}}>
          <Image source={require('../../assets/image/avatar.jpg')} style={{width: 160, height: 160, borderRadius: 999}} />
          <TouchableOpacity style={{position: 'absolute', right: 0, bottom: 0, padding: 8, borderRadius: 999, backgroundColor: Colors.primary}}>
            <Icon name="camera" size={24} color={Colors.light} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{marginTop: 32, width: '100%', gap: 8, alignItems: 'center', paddingHorizontal: 16}}>
        <InputText placeholder="Username" />
        <InputText placeholder="Name" />
        <InputText placeholder="Surname" />
        <InputText placeholder="Email" />
      </View>

      <Button
        title="Save"
        style={{position: 'absolute', bottom: 20, width: '94%', alignSelf: 'center'}}
        onPress={() => {
          nav.goBack();
        }}
      />
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
