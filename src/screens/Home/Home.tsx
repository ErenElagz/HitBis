// React
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
// Styles
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomMapStyle} from '../../styles/MapStyle';
// Libraries
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
// Components
import SearchBar from '../../components/SearchBar';
import Button from '../../components/Button';
import Header from '../../components/Header';
import EventCard from '../../components/EventCard/EventCard';
import {events} from '../../data/events';
export default function HomeScreen() {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <Header title="Welcome Eren" description="Let's find a bike for you" />
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, padding: 16, paddingBottom: 80}}>
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
            onPress={() => {
              nav.navigate('NearMe' as never);
            }}
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
          <Button style={{flex: 1}} type="tertiary" icon="plus" title="Create a Route" onPress={() => nav.navigate('CreateRoute' as never)} />
          <Button style={{flex: 1}} type="tertiary" icon="bike" title="Ride Together" onPress={() => nav.navigate('RideTogether' as never)} />
        </View>

        <SearchBar onPress={() => nav.navigate('Community' as never, {screen: 'Search'})} placeholder="Search for Bikes and Locations" />

        <View
          style={{
            flexDirection: 'column',
          }}>
          <View style={{marginTop: 16, width: '100%', gap: 8}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}>
              <Icon name="map" size={28} color={Colors.light} />
              <Text
                style={{
                  color: Colors.light,
                  fontSize: 24,
                  fontFamily: Fonts.main,
                }}>
                Popular Routes
              </Text>
            </View>
          </View>
          <View style={{marginTop: 32, width: '100%', gap: 8}}>
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
            <View>
              <ScrollView style={{gap: 8, paddingBottom: 120}} horizontal showsHorizontalScrollIndicator={false}>
                {events.map(event => (
                  <EventCard key={event.id} {...event} />
                ))}
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>

      <Button
        style={{
          position: 'absolute',
          bottom: 12,
          width: 180,
          alignSelf: 'center',
          height: 60,
          borderRadius: 999,
        }}
        title="Start the Ride "
        type="secondary"
        icon="bike"
        onPress={() => nav.navigate('Ride' as never)}
      />
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
