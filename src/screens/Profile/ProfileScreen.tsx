import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

export default function ProfileScreen() {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          gap: 20,
          borderRadius: 16,
          padding: 24,
          backgroundColor: Colors.backgroundColorSecondary,
          flexDirection: 'row',
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            gap: 8,
          }}>
          <Image source={require('../../assets/image/avatar.jpg')} style={{width: 100, height: 100, borderRadius: 50}} />
          <Text style={styles.text}>ErenElagz</Text>
        </View>
      </View>
      <View style={{marginTop: 16, width: '100%', gap: 8, flexDirection: 'row', justifyContent: 'center'}}>
        <Button
          icon="account-outline"
          type="secondary"
          title="My Profile"
          style={{flex: 1}}
          onPress={() => {
            nav.goBack;
          }}
        />
        <Button
          icon="asterisk"
          type="secondary"
          title="Settings"
          style={{flex: 1}}
          onPress={() => {
            // logout
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 32,
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
  },
  text: {
    color: Colors.light,
    fontSize: 24,
    fontFamily: Fonts.main,
  },
});
