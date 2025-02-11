// React
import React, {useRef, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
// Styles
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomMapStyle} from '../../styles/MapStyle';
// Libraries
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
// Components
import Button from '../../components/Button';
import Header from '../../components/Header';
import EventCard from '../../components/EventCard/EventCard';
import {events} from '../../data/events';
import GetLocation from 'react-native-get-location';
import RouteCard from '../../components/RouteCard/RouteCard';
import {popularRoutes} from '../../data/routes';

export default function HomeScreen() {
  const nav = useNavigation();

  const mapRef = useRef(null);
  useEffect(() => {
    if (mapRef.current) {
      const timer = setTimeout(() => {
        if (mapRef.current) {
          GetLocation.getCurrentPosition({
            enableHighAccuracy: false,
            timeout: 15000,
          })
            .then(location => {
              mapRef.current.animateToRegion({
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              });
            })
            .catch(error => {
              console.warn(error);
            });
        }
      }, 1000);
      return () => clearTimeout(timer); // Cleanup
    }
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Welcome Eren" description="Let's find a bike for you" />
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, padding: 12, paddingBottom: 80}}>
        <View
          style={{
            borderRadius: 16,
            overflow: 'hidden',
          }}>
          <MapView
            ref={mapRef}
            customMapStyle={CustomMapStyle}
            style={styles.map}
            showsUserLocation={true}
            followsUserLocation={true}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 41.0369,
              longitude: 28.9855,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 8,
            marginTop: 8,
          }}>
          <Button style={{flex: 1}} type="secondary" icon="plus" title="Create a Route" onPress={() => nav.navigate('CreateRoute' as never)} />
        </View>

        <View style={{marginTop: 32, width: '100%', gap: 8}}>
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
                gap: 8,
              }}>
              Popular Routes
            </Text>
          </View>
          <View>
            <ScrollView style={{gap: 24}} horizontal showsHorizontalScrollIndicator={false}>
              {popularRoutes.map(route => (
                <RouteCard key={route.id} {...route} />
              ))}
            </ScrollView>
          </View>
        </View>

        <View style={{marginTop: 24, width: '100%', gap: 8}}>
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
            <ScrollView style={{gap: 24, paddingBottom: 120}} horizontal showsHorizontalScrollIndicator={false}>
              {events.map(event => (
                <EventCard key={event.id} {...event} />
              ))}
            </ScrollView>
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
    height: 300,
  },
});
