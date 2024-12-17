import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Colors from '../styles/colors';
import Fonts from '../styles/fonts';
// Libraries
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {CustomMapStyle} from '../utils/mapStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import StationsList from '../data/stations';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function HomeScreen() {
  const nav = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            borderRadius: 16,
            overflow: 'hidden',
          }}>
          <MapView
            customMapStyle={CustomMapStyle}
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 41.0082,
              longitude: 28.9784,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}></MapView>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              marginTop: 16,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              zIndex: 999,
              bottom: 16,
              right: 16,
              backgroundColor: Colors.dark,
              width: 48,
              height: 48,
              borderRadius: 16,
            }}>
            <Icon name="crop-free" size={28} color={Colors.light} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 16,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              zIndex: 999,
              bottom: 72,
              right: 20,
              backgroundColor: Colors.secondaryDark,
              width: 36,
              height: 36,
              borderRadius: 20,
            }}>
            <Icon name="near-me" size={20} color={Colors.red} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 16,
            backgroundColor: Colors.backgroundColorSecondary,
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderRadius: 16,
            gap: 4,
          }}>
          <TouchableOpacity>
            <Icon name="magnify" size={28} color={Colors.light} />
          </TouchableOpacity>
          <TextInput
            style={{
              flex: 1,
              color: Colors.light,
              fontSize: 16,
              fontFamily: 'Roboto-Regular',
            }}
            placeholderTextColor={Colors.light}
            placeholder="Search for Bikes and Locations"
          />
          <TouchableOpacity>
            <Icon name="microphone" size={28} color={Colors.light} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'column',
          }}>
          <View style={{marginTop: 8, width: '100%', gap: 8}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}>
              <Icon name="ticket" size={28} color={Colors.light} />
              <Text
                style={{
                  color: Colors.light,
                  fontSize: 24,
                  fontFamily: Fonts.main,
                }}>
                Upcoming Events
              </Text>
            </View>
            <View style={{marginTop: 4, height: 200, width: '100%', backgroundColor: Colors.backgroundColorSecondary, borderRadius: 16}} />
          </View>
          <View style={{marginTop: 24, width: '100%', gap: 8}}>
            <Text style={styles.text}>On the way</Text>
            <View style={{marginTop: 4, height: 200, width: '100%', backgroundColor: Colors.backgroundColorSecondary, borderRadius: 16}} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    paddingBottom: 20,
    backgroundColor: Colors.backgroundColor,
  },
  text: {
    color: Colors.light,
    fontSize: 20,
    fontFamily: Fonts.main,
  },
  map: {
    width: '100%',
    height: 400,
  },
});
