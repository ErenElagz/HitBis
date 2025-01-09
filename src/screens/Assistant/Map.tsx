import {ScrollView, StyleSheet, View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import MapViewDirections from 'react-native-maps-directions';
import {CustomMapStyle} from '../../styles/MapStyle';
import {useNavigation} from '@react-navigation/native';

export default function Map({route}) {
  const GOOGLE_MAPS_APIKEY = 'AIzaSyB4JO7I3nUkkonlX-NvfasHvx1u06DxOS8';
  const {places} = route.params;

  return (
    <>
      <MapView
        style={{width: '100%', height: '100%'}}
        customMapStyle={CustomMapStyle}
        provider={PROVIDER_GOOGLE}
        loadingEnabled={true}
        initialRegion={{
          latitude: 41.0082,
          longitude: 28.9784,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}>
        {places.length > 0 &&
          places.map((place, index) => (
            <Marker key={index} coordinate={{latitude: place.latitude, longitude: place.longitude}} title={place.name} description={place.description} />
          ))}

        {places.length > 0 && (
          <MapViewDirections
            origin={places[0]}
            destination={places[places.length - 1]}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            waypoints={places.slice(1, -1)}
            strokeColor="darkgreen"
            mode="DRIVING"
          />
        )}
      </MapView>
    </>
  );
}

const styles = StyleSheet.create({
  info: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    position: 'absolute',
    bottom: 16,
    width: '90%',
    height: '30%',
    alignSelf: 'center',
  },
  card: {backgroundColor: 'white', padding: 8, borderRadius: 16, marginVertical: 8},
});
