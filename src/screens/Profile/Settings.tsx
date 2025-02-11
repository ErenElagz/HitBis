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
import Button from '../../components/Button';
// Components
import InputText from '../../components/InputText';

export default function SettingsScreen() {
  const nav = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => nav.goBack()} style={{flexDirection: 'row', alignItems: 'flex-start', gap: 8, paddingLeft: 20}}>
        <Icon name="arrow-left" size={24} color={Colors.light} />
        <Text
          style={{
            color: Colors.light,
            fontSize: 20,
            fontFamily: Fonts.interBold,
          }}>
          Settings
        </Text>
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={{marginTop: 32, width: '100%', gap: 8, alignItems: 'center'}}>
            <View style={{padding: 4, borderRadius: 999, backgroundColor: Colors.primary}}>
              <Image source={require('../../assets/images/avatar.jpg')} style={{width: 80, height: 80, borderRadius: 999}} />
              <TouchableOpacity style={{position: 'absolute', right: 0, bottom: 0, padding: 8, borderRadius: 999, backgroundColor: Colors.primary}}>
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
            <Button title="Log out" onPress={() => {}} type="tertiary" icon="logout" />
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
