// React
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, ScrollView} from 'react-native';
import React from 'react';
// Styles
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomMapStyle} from '../../utils/mapStyle';
// Libraries
import {useNavigation} from '@react-navigation/native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import StationsList from '../../data/stations';
// Components
import Button from '../../components/Button';

// Constants
const {width} = Dimensions.get('window');

export default function RentCycleScreen() {
  const nav = useNavigation();

  return (
    <>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        customMapStyle={CustomMapStyle}
        loadingEnabled={true}
        initialRegion={{
          latitude: 41.0082,
          longitude: 28.9784,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}>
        {StationsList.map(place => (
          <Marker key={place.id} coordinate={place.coordinate} title={place.title} description={place.description} />
        ))}
      </MapView>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});
