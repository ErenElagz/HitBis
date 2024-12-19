import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
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
import Button from '../components/Button';

export default function HomeScreen() {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16, paddingTop: 32, backgroundColor: Colors.backgroundColorSecondary}}>
        <Image style={{width: 60, height: 60, borderRadius: 32}} source={require('../assets/image/avatar.jpg')} />
        <View style={{flex: 1, marginLeft: 16}}>
          <Text style={{color: Colors.light, fontSize: 20, fontFamily: Fonts.main}}>Welcome, Eren!</Text>
          <Text style={{color: Colors.gray, fontSize: 16, fontFamily: Fonts.interRegular}}>Where do you want to go today?</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, padding: 16, backgrounColor: Colors.backgroundColor}}>
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
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 8,
            marginTop: 8,
          }}>
          <Button style={{flex: 1}} type="tertiary" icon="plus" title="Create a Event" onPress={() => nav.navigate('RentCycleScreen' as never)} />
          <Button style={{flex: 1}} type="tertiary" icon="bike" title="Ride Together" onPress={() => nav.navigate('RentCycleScreen' as never)} />
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
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{width: '100%', gap: 8, flexDirection: 'row', overflow: 'visible'}}>
                <View style={{height: 200, width: 320, backgroundColor: Colors.tertiary, borderRadius: 16}} />
                <View style={{height: 200, width: 320, backgroundColor: Colors.secondary, borderRadius: 16}} />
                <View style={{height: 200, width: 320, backgroundColor: Colors.primary, borderRadius: 16}} />
              </View>
            </ScrollView>
          </View>
          <View style={{marginTop: 24, width: '100%', gap: 8}}>
            <Text style={styles.text}>On the way</Text>
            <View>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 8, gap: 16}}>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                  <Image source={require('../assets/image/avatar.jpg')} style={{width: 48, height: 48, borderRadius: 32}} />
                  <Text style={{color: Colors.light, fontSize: 20, fontFamily: Fonts.main}}>Eren</Text>
                  <Text style={{color: Colors.gray, fontSize: 16, fontFamily: Fonts.interSemiBold}}> 400m</Text>
                </View>
                <View>
                  <Button style={{width: 72}} type="tertiary" icon="vibrate" />
                </View>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 8, gap: 16}}>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                  <Image source={require('../assets/image/avatar.jpg')} style={{width: 48, height: 48, borderRadius: 32}} />
                  <Text style={{color: Colors.light, fontSize: 20, fontFamily: Fonts.main}}>Eren</Text>
                  <Text style={{color: Colors.gray, fontSize: 16, fontFamily: Fonts.interSemiBold}}> 1.2km</Text>
                </View>
                <View>
                  <Button style={{width: 72}} type="tertiary" icon="vibrate" />
                </View>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 8, gap: 16, marginBottom: 16}}>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                  <Image source={require('../assets/image/avatar.jpg')} style={{width: 48, height: 48, borderRadius: 32}} />
                  <Text style={{color: Colors.light, fontSize: 20, fontFamily: Fonts.main}}>Eren</Text>
                  <Text style={{color: Colors.gray, fontSize: 16, fontFamily: Fonts.interSemiBold}}> 1.4km</Text>
                </View>
                <View>
                  <Button style={{width: 72}} type="tertiary" icon="vibrate" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <Button style={{position: 'absolute', bottom: 16, width: 180, alignSelf:"center", height: 60, borderRadius: 999}} title='Start the Ride ' type="secondary" icon="bike" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  text: {
    color: Colors.light,
    fontSize: 20,
    fontFamily: Fonts.main,
  },
  map: {
    width: '100%',
    height: 240,
  },
});
