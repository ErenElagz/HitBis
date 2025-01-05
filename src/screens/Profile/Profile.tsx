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

export default function ProfileScreen() {
  const nav = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            borderRadius: 16,
            padding: 24,
            backgroundColor: Colors.backgroundColorsSecondary,
            flexDirection: 'row',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              gap: 8,
              flex: 1,
            }}>
            <Image source={require('../../assets/images/avatar.jpg')} style={{width: 120, height: 120, borderRadius: 999}} />
            <Text style={styles.textUsername}>ErenElagz</Text>
          </View>
          <View style={{gap: 8, flex: 1, alignItems: 'flex-start', paddingLeft: 32}}>
            <View>
              <Text style={styles.text}>6.37 K</Text>
              <Text style={styles.textSoft}>Point</Text>
            </View>
            <View>
              <Text style={styles.text}>217 km</Text>
              <Text style={styles.textSoft}>On the Way</Text>
            </View>
            <View>
              <Text style={styles.text}>441 Bikers</Text>
              <Text style={styles.textSoft}>You interracted</Text>
            </View>
          </View>
        </View>
        <View style={{marginTop: 12, width: '100%', gap: 8, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start'}}>
          <Button
            icon="account-outline"
            type="secondary"
            title="Edit Profile"
            style={{flex: 1}}
            onPress={() => {
              nav.navigate('EditProfile' as never);
            }}
          />
          <Button
            icon="asterisk"
            type="secondary"
            title="Settings"
            style={{flex: 1}}
            onPress={() => {
              nav.navigate('Settings' as never);
            }}
          />
          <Button
            icon="archive-outline"
            type="secondary"
            style={{flex: 0.4}}
            onPress={() => {
              nav.navigate('Notifications' as never);
            }}
          />
        </View>
        <View style={{marginTop: 24, width: '100%', gap: 8}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={styles.text}>Last Activities</Text>
            <TouchableOpacity onPress={() => nav.navigate('ActivityHistory' as never)}>
              <Text style={{color: Colors.gray, fontSize: 16, fontFamily: Fonts.interRegular, textDecorationLine: 'underline'}}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 4, height: 200, width: '100%', backgroundColor: Colors.backgroundColorsSecondary, borderRadius: 16}} />
        </View>
        <View style={{marginTop: 24, width: '100%', gap: 8}}>
          <Text style={styles.text}>My Groups</Text>
          <View style={{marginTop: 4, height: 200, width: '100%', backgroundColor: Colors.backgroundColorsSecondary, borderRadius: 16}} />
        </View>
        <View style={{marginTop: 24, width: '100%', gap: 8}}>
          <Text style={styles.text}>My Routes</Text>
          <View style={{marginTop: 4, height: 200, width: '100%', backgroundColor: Colors.backgroundColorsSecondary, borderRadius: 16}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
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
  textUsername: {
    color: Colors.light,
    fontSize: 28,
    fontFamily: Fonts.main,
  },
});
