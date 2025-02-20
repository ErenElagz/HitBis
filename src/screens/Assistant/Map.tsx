import {StyleSheet, View, Text, TouchableOpacity, Linking} from 'react-native';
import React, {useRef, useCallback} from 'react';
import {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import MapViewDirections from 'react-native-maps-directions';
import {CustomMapStyle} from '../../styles/MapStyle';
import {useNavigation} from '@react-navigation/native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import Button from '../../components/Button';
import Colors from '../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fonts from '../../styles/Fonts';
import MapView from 'react-native-map-clustering';

export default function Map(route) {
  const GOOGLE_MAPS_APIKEY = 'AIzaSyB4JO7I3nUkkonlX-NvfasHvx1u06DxOS8';
  const {places} = route.params;
  const nav = useNavigation();

  const [duration, setDuration] = React.useState(0);
  const [distance, setDistance] = React.useState(0);

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  const openInGoogleMaps = (latitude: number, longitude: number) => {
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    Linking.openURL(url).catch(err => console.error('Failed to open Google Maps:', err));
  };

  return (
    <View>
        <TouchableOpacity
          style={{
            marginTop: 16,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            zIndex: 999,
            top: 16,
            left: 16,
            backgroundColor: Colors.dark,
            width: 48,
            height: 48,
            borderRadius: 16,
          }}
          onPress={() => nav.goBack()}>
          <Icon name="arrow-left" size={28} color={Colors.light} />
        </TouchableOpacity>

        <Button
          title="Start the Route"
          type="tertiary"
          style={{
            marginTop: 16,
            position: 'absolute',
            zIndex: 999,
            top: 16,
            right: 16,
            width: 'auto',
            paddingHorizontal: 16,
          }}
          onPress={() => nav.navigate('Home' as never, {screen: 'Ride', params: {places}})}
        />

        <TouchableOpacity
          style={{
            marginTop: 16,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            zIndex: 999,
            top: 16,
            left: 16,
            backgroundColor: Colors.dark,
            width: 48,
            height: 48,
            borderRadius: 16,
          }}
          onPress={() => nav.goBack()}>
          <Icon name="arrow-left" size={28} color={Colors.light} />
        </TouchableOpacity>

        <MapView
          clusteringEnabled={false}
          clusterColor="#000"
          style={{width: '100%', height: '100%'}}
          customMapStyle={CustomMapStyle}
          provider={PROVIDER_GOOGLE}
          loadingEnabled={true}
          initialRegion={{
            latitude: places[0].latitude,
            longitude: places[0].longitude,
            latitudeDelta: 0.043,
            longitudeDelta: 0.043,
          }}>
          {places.length > 0 &&
            places.map((place: any, index: number) => (
              <Marker key={index} coordinate={{latitude: place.latitude, longitude: place.longitude}} title={place.name} tracksViewChanges={false}>
                <View
                  style={{
                    backgroundColor: Colors.backgroundColorsSecondary,
                    padding: 8,
                    borderRadius: 999,
                    borderColor: Colors.light,
                    borderWidth: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 4,
                  }}>
                  <Icon name="near-me" size={12} color={Colors.light} />
                  <Text style={{color: Colors.light, fontFamily: Fonts.main, fontSize: 10}}>
                    {index + 1} {place.name}
                  </Text>
                </View>
              </Marker>
            ))}

          {places.length > 0 && (
            <MapViewDirections
              origin={places[0]}
              destination={places[places.length - 1]}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              waypoints={places.slice(1, -1)}
              strokeColor="darkblue"
              optimizeWaypoints={true}
              onReady={result => {
                setDuration(parseFloat(result.duration.toFixed(2)));
                setDistance(parseFloat(result.distance.toFixed(2)));
              }}
            />
          )}
        </MapView>

        <BottomSheet
          backgroundStyle={{
            backgroundColor: Colors.backgroundColor,
          }}
          ref={bottomSheetRef}
          handleIndicatorStyle={{backgroundColor: Colors.light}}
          snapPoints={['25%', '50%']}>
          <BottomSheetView style={styles.contentContainer}>
            <View
              style={{
                flexDirection: 'row',
                gap: 8,
                marginBottom: 8,
              }}>
              <View style={{flex: 1, backgroundColor: Colors.backgroundColorsSecondary, padding: 16, borderRadius: 24}}>
                <Text style={{color: Colors.gray, textAlign: 'center', fontFamily: Fonts.main, fontSize: 14, fontWeight: 'bold'}}>Duration (Min)</Text>
                <Text style={{color: Colors.light, textAlign: 'center', fontFamily: Fonts.main, fontSize: 20, fontWeight: 'bold'}}>{duration} min</Text>
              </View>
              <View style={{flex: 1, backgroundColor: Colors.backgroundColorsSecondary, padding: 16, borderRadius: 24}}>
                <Text style={{color: Colors.gray, textAlign: 'center', fontFamily: Fonts.main, fontSize: 14, fontWeight: 'bold'}}>Distance (Km)</Text>
                <Text style={{color: Colors.light, textAlign: 'center', fontFamily: Fonts.main, fontSize: 20, fontWeight: 'bold'}}>{distance} km</Text>
              </View>
            </View>

            {places.length > 0 &&
              places.map((place: any, index: number) => (
                <TouchableOpacity style={styles.card} key={`place-${index}`} onPress={() => openInGoogleMaps(place.latitude, place.longitude)}>
                  <View style={styles.mapIconContainer}>
                    <Icon name="map-marker-outline" size={48} color="#fff" />
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={styles.cardTitle}>
                      {index + 1}. {place.name}
                    </Text>
                    <Text style={styles.cardDescription}>{place.description}</Text>
                  </View>
                </TouchableOpacity>
              ))}
          </BottomSheetView>
        </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    gap: 4,
    paddingHorizontal: 16,
    backgroundColor: Colors.backgroundColor,
  },
  card: {
    backgroundColor: '#ffffff20',
    padding: 16,
    borderRadius: 24,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
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
    marginRight: 16,
  },
});
