import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import Colors from '../../styles/colors';
// Libraries
import MapView, {PROVIDER_GOOGLE, Marker, PROVIDER_DEFAULT} from 'react-native-maps';
import {CustomMapStyle} from '../../utils/mapStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';
import StationsList from '../../data/stations';

const {width} = Dimensions.get('window');

export default function RentCycleScreen() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_DEFAULT}
        customMapStyle={CustomMapStyle}
        initialRegion={{
          latitude: 41.0082,
          longitude: 28.9784,
          latitudeDelta: 0.2, // Harita kapsama alanını genişlettim
          longitudeDelta: 0.2,
        }}>
        {StationsList.map(station => (
          <Marker
            key={station.id}
            coordinate={station.location}
            title={station.name}
            description={`Bisiklet: ${station.bikeCount} Boş Park: ${station.dockedCount}`}
          />
        ))}
      </MapView>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  map: {
      flex: 1,

  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: Colors.dark,
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  detailsContainer: {
    position: 'absolute',
    bottom: 16,
    width: '94%',
    alignSelf: 'center',
    gap: 8,
    zIndex: 999,
  },
  stationScrollView: {
    overflow: 'visible',
  },
  stationCard: {
    backgroundColor: '#000000dd',
    padding: 16,
    borderRadius: 16,
    width: width - 128,
    height: 160,
    margin: 4,
  },
  stationName: {
    color: Colors.light,
    fontSize: 28,
    fontWeight: 'bold',
  },
  stationText: {
    color: Colors.light,
    fontSize: 16,
    marginTop: 8,
  },
});
