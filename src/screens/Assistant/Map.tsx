import {ScrollView, StyleSheet, View, Text, TouchableOpacity, Linking} from 'react-native';
import React, {useRef, useCallback} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import MapViewDirections from 'react-native-maps-directions';
import {CustomMapStyle} from '../../styles/MapStyle';
import {useNavigation} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import Button from '../../components/Button';
import Colors from '../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Map({route}) {
  const GOOGLE_MAPS_APIKEY = 'AIzaSyB4JO7I3nUkkonlX-NvfasHvx1u06DxOS8';
  const {places} = route.params;
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const openInGoogleMaps = (latitude, longitude) => {
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    Linking.openURL(url).catch(err => console.error('Failed to open Google Maps:', err));
  };

  return (
    <>
      <GestureHandlerRootView>
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
        <BottomSheet
          backgroundStyle={{
            backgroundColor: Colors.backgroundColor,
          }}
          backdropComponent={null}
          ref={bottomSheetRef}
          onChange={handleSheetChanges}
          snapPoints={['25%', '50%']}>
          <BottomSheetView style={styles.contentContainer}>
            {places.length > 0 &&
              places.map((place: any, index: number) => (
                <View style={styles.card} key={index}>
                  <View style={{flex: 1,}}>
                    <Text style={styles.cardTitle}>{place.name}</Text>
                    <Text style={styles.cardDescription}>{place.description}</Text>
                  </View>
                  <TouchableOpacity style={styles.mapIconContainer} onPress={() => openInGoogleMaps(place.latitude, place.longitude)}>
                    <Icon name="map-marker" size={24} color="#fff" />
                  </TouchableOpacity>
                </View>
              ))}
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 8,
    backgroundColor: Colors.backgroundColor,
  },
  card: {
    backgroundColor: '#ffffff50',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height:100
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardDescription: {
    fontSize: 14,
    color: '#fff',
    marginTop: 8,
    flex: 1,
  },
  mapIconContainer: {
    marginLeft: 16,
  },
});
