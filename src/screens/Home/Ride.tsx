import React, {useRef, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomMapStyle} from '../../styles/MapStyle';
import {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import StopwatchTimer, {StopwatchTimerMethods} from 'react-native-animated-stopwatch-timer';
import MapView from 'react-native-map-clustering';
import MapViewDirections from 'react-native-maps-directions';
import GetLocation from 'react-native-get-location';

export default function RideScreen(route: any) {
  const nav = useNavigation();
  const {places} = route.params || {places: []};

  const [speed, setSpeed] = useState(0);
  const [calories, setCalories] = useState(0);
  const [distance, setDistance] = useState(0);
  const [userLocation, setUserLocation] = useState(null);

  const bottomSheetRef = useRef(null);
  const stopwatchTimerRef = useRef<StopwatchTimerMethods>(null);
  const mapRef = useRef(null);

  const GOOGLE_MAPS_APIKEY = 'AIzaSyB4JO7I3nUkkonlX-NvfasHvx1u06DxOS8';

  const fetchUserLocation = async () => {
    try {
      const location = await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
      });
      setUserLocation({
        latitude: location.latitude,
        longitude: location.longitude,
      });
      if (mapRef.current) {
        mapRef.current.animateToRegion({
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      }
    } catch (error) {
      console.warn('Konum alınamadı:', error);
    }
  };

  useEffect(() => {
    fetchUserLocation();
  }, []);

  const play = async () => {
    stopwatchTimerRef.current?.play();
    try {
      const location = await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
      });
      const currentSpeed = parseFloat((location.speed * 3.6).toFixed(1));
      setSpeed(currentSpeed);
      setCalories(prev => parseFloat((prev + currentSpeed * 2).toFixed(1)));
      setDistance;
    } catch (error) {
      console.warn('Hız bilgisi alınamadı:', error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      play();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const pause = () => {
    stopwatchTimerRef.current?.pause();
    setSpeed(0);
  };

  const reset = () => {
    stopwatchTimerRef.current?.reset();
    setSpeed(0);
    setCalories(0);
    setDistance(0);
  };

  return (
    <View style={styles.container}>
      <GestureHandlerRootView>
        <MapView
          ref={mapRef}
          clusteringEnabled={false}
          style={styles.map}
          customMapStyle={CustomMapStyle}
          provider={PROVIDER_GOOGLE}
          loadingEnabled={true}
          showsUserLocation={true}
          followsUserLocation={true}
          initialRegion={{
            latitude: places.length > 0 ? places[0].latitude : 41.0082,
            longitude: places.length > 0 ? places[0].longitude : 28.9784,
            latitudeDelta: 0.043,
            longitudeDelta: 0.043,
          }}>
          {places.map((place: any, index: number) => (
            <Marker key={index} coordinate={{latitude: place.latitude, longitude: place.longitude}} title={place.name} description={place.description} tracksViewChanges={false}>
              <View style={styles.marker}>
                <Icon name="near-me" size={12} color={Colors.light} />
                <Text style={styles.markerText}>{index + 1}</Text>
              </View>
            </Marker>
          ))}

          {places.length > 1 && (
            <MapViewDirections
              origin={places[0]}
              destination={places[places.length - 1]}
              waypoints={places.slice(1, -1)}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="darkgreen"
            />
          )}
        </MapView>

        <BottomSheet ref={bottomSheetRef} handleComponent={null} backgroundStyle={{backgroundColor: Colors.backgroundColor}}>
          <BottomSheetView>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.button} onPress={() => nav.goBack()}>
                <Icon name="close" size={24} color={Colors.light} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={reset}>
                <Icon name="reload" size={24} color={Colors.light} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Icon name="map" size={24} color={Colors.light} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Icon name="near-me" size={24} color={Colors.light} />
              </TouchableOpacity>
            </View>

            <View style={styles.statsRow}>
              <View style={styles.stat}>
                <Text style={styles.statLabel}>Distance</Text>
                <Text style={styles.statValue}>{distance} m</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statLabel}>Speed</Text>
                <Text style={styles.statValue}>{speed} km/h</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statLabel}>Calories</Text>
                <Text style={styles.statValue}>{calories} kcal</Text>
              </View>
            </View>

            <View style={styles.stopwatchContainer}>
              <TouchableOpacity style={styles.stopwatchButton} onPress={pause}>
                <Icon name="pause" size={48} color={Colors.light} />
              </TouchableOpacity>
              <StopwatchTimer ref={stopwatchTimerRef} decimalSeparator="." containerStyle={styles.stopwatch} textCharStyle={styles.stopwatchText} />
              <TouchableOpacity style={styles.stopwatchButton} onPress={play}>
                <Icon name="play" size={48} color={Colors.light} />
              </TouchableOpacity>
            </View>
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  marker: {
    backgroundColor: Colors.backgroundColorsSecondary,
    padding: 8,
    borderRadius: 999,
    borderColor: Colors.light,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  markerText: {
    color: Colors.light,
    fontFamily: Fonts.main,
    fontSize: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 12,
    gap: 8,
  },
  button: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: Colors.backgroundColorsSecondary,
    borderRadius: 16,
    padding: 12,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 12,
    paddingVertical: 0,
    gap: 8,
  },
  stat: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: Colors.backgroundColorsSecondary,
    borderRadius: 16,
    padding: 12,
  },
  statLabel: {
    color: Colors.light,
    fontSize: 16,
    fontFamily: Fonts.main,
  },
  statValue: {
    color: Colors.primary,
    fontSize: 24,
    fontFamily: Fonts.main,
    fontWeight: 'bold',
    letterSpacing: -1,
  },
  stopwatchContainer: {
    padding: 12,
    alignItems: 'center',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  stopwatchButton: {
    backgroundColor: Colors.backgroundColorsSecondary,
    padding: 12,
    borderRadius: 16,
  },
  stopwatch: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stopwatchText: {
    color: Colors.light,
    fontSize: 54,
    fontFamily: Fonts.main,
    fontWeight: 'bold',
    letterSpacing: -2,
  },
});
