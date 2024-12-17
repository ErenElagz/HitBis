import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const nav = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <View style={{flex: 1, alignItems: 'flex-start', gap: 4, paddingLeft: 32}}>
            <View>
              <Text style={styles.text}>6.37K</Text>
              <Text style={styles.textSoft}>Point</Text>
            </View>
            <View>
              <Text style={styles.text}>217km</Text>
              <Text style={styles.textSoft}>On the Way</Text>
            </View>
            <View>
              <Text style={styles.text}>441 Bikers</Text>
              <Text style={styles.textSoft}>You interracted</Text>
            </View>
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
          <Button
            icon="archive-outline"
            type="secondary"
            style={{flex: 0.4}}
            onPress={() => {
              // logout
            }}
          />
        </View>
        <View style={{marginTop: 24, width: '100%', gap: 8}}>
          <Text style={styles.text}>Last Activities</Text>
          <View style={{marginTop: 4, height: 200, width: '100%', backgroundColor: Colors.backgroundColorSecondary, borderRadius: 16}} />
        </View>
        <View style={{marginTop: 24, width: '100%', gap: 8}}>
          <Text style={styles.text}>My Groups</Text>
          <View style={{marginTop: 4, height: 200, width: '100%', backgroundColor: Colors.backgroundColorSecondary, borderRadius: 16}} />
        </View>
        <View style={{marginTop: 24, width: '100%', gap: 8}}>
          <Text style={styles.text}>My Routes</Text>
          <View style={{marginTop: 4, height: 200, width: '100%', backgroundColor: Colors.backgroundColorSecondary, borderRadius: 16}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: Colors.backgroundColor,
  },
  text: {
    color: Colors.light,
    fontSize: 20,
    fontFamily: Fonts.main,
  },
  textSoft: {
    color: Colors.gray,
    fontSize: 12,
    fontFamily: Fonts.interRegular,
  },
});
