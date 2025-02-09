// React
import React, {useRef} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
// Styles
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomMapStyle} from '../../styles/MapStyle';
// Libraries
import {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';

// Components
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import StopwatchTimer, {StopwatchTimerMethods} from 'react-native-animated-stopwatch-timer';
import MapView from 'react-native-map-clustering';
import MapViewDirections from 'react-native-maps-directions';

export default function RideScreen({route}) {
  const nav = useNavigation();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const {places} = route.params || {places: []};
  const GOOGLE_MAPS_APIKEY = 'AIzaSyB4JO7I3nUkkonlX-NvfasHvx1u06DxOS8';

  const stopwatchTimerRef = useRef<StopwatchTimerMethods>(null);

  // Methods to control the stopwatch
  function play() {
    stopwatchTimerRef.current?.play();
  }

  function pause() {
    stopwatchTimerRef.current?.pause();
  }

  function reset() {
    stopwatchTimerRef.current?.reset();
  }

  return (
    <View style={styles.container}>
      <GestureHandlerRootView>
        <MapView
          clusteringEnabled={false}
          clusterColor="#000"
          style={{width: '100%', height: '100%'}}
          customMapStyle={CustomMapStyle}
          provider={PROVIDER_GOOGLE}
          loadingEnabled={true}
          initialRegion={{
            latitude: places.length > 0 ? places[0].latitude : 41.0082,
            longitude: places.length > 0 ? places[0].longitude : 28.9784,
            latitudeDelta: 0.043,
            longitudeDelta: 0.043,
          }}>
          {places.length > 0 &&
            places.map((place: any, index: number) => (
              <Marker key={index} coordinate={{latitude: place.latitude, longitude: place.longitude}} title={place.name} description={place.description} tracksViewChanges={false}>
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
                  <Text style={{color: Colors.light, fontFamily: Fonts.main, fontSize: 10}}>{index + 1}</Text>
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
              strokeColor="darkgreen"
            />
          )}
        </MapView>
        <BottomSheet
          handleComponent={null}
          backgroundStyle={{
            backgroundColor: Colors.backgroundColor,
          }}>
          <BottomSheetView>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: 12,
                gap: 8,
              }}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  flex: 1,
                  backgroundColor: Colors.backgroundColorsSecondary,
                  borderRadius: 16,
                  padding: 12,
                }}
                onPress={() => nav.goBack()}>
                <Icon name="close" size={24} color={Colors.light} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  flex: 1,
                  backgroundColor: Colors.backgroundColorsSecondary,
                  borderRadius: 16,
                  padding: 12,
                }}>
                <Icon name="map" size={24} color={Colors.light} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  flex: 1,
                  backgroundColor: Colors.backgroundColorsSecondary,
                  borderRadius: 16,
                  padding: 12,
                }}>
                <Icon name="near-me" size={24} color={Colors.light} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  flex: 1,
                  backgroundColor: Colors.backgroundColorsSecondary,
                  borderRadius: 16,
                  padding: 12,
                }}>
                <Icon name="arrow-up" size={24} color={Colors.light} />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: 12,
                paddingVertical: 0,
                gap: 8,
              }}>
              {/* Yükseklik Sütunu */}
              <View
                style={{
                  alignItems: 'center',
                  flex: 1,
                  backgroundColor: Colors.backgroundColorsSecondary,
                  borderRadius: 16,
                  padding: 12,
                }}>
                <Text
                  style={{
                    color: Colors.light,
                    fontSize: 16,
                    fontFamily: Fonts.main,
                  }}>
                  Distance
                </Text>
                <Text
                  style={{
                    color: Colors.primary,
                    fontSize: 24,
                    fontFamily: Fonts.main,
                    fontWeight: 'bold',
                    letterSpacing: -1,
                  }}>
                  0 m
                </Text>
              </View>
              {/* Hız Sütunu */}
              <View
                style={{
                  alignItems: 'center',
                  flex: 1,
                  backgroundColor: Colors.backgroundColorsSecondary,
                  borderRadius: 16,
                  padding: 12,
                }}>
                <Text
                  style={{
                    color: Colors.light,
                    fontSize: 16,
                    fontFamily: Fonts.main,
                  }}>
                  Speed
                </Text>
                <Text
                  style={{
                    color: Colors.primary,
                    fontSize: 24,
                    fontFamily: Fonts.main,
                    fontWeight: 'bold',
                    letterSpacing: -1,
                  }}>
                  0 km/h
                </Text>
              </View>
              {/* Yakılan Kalori Sütunu */}
              <View
                style={{
                  alignItems: 'center',
                  flex: 1,
                  backgroundColor: Colors.backgroundColorsSecondary,
                  borderRadius: 16,
                  padding: 12,
                }}>
                <Text
                  style={{
                    color: Colors.light,
                    fontSize: 16,
                    fontFamily: Fonts.main,
                  }}>
                  Calories
                </Text>
                <Text
                  style={{
                    color: Colors.primary,
                    fontSize: 24,
                    fontFamily: Fonts.main,
                    fontWeight: 'bold',
                    letterSpacing: -1,
                  }}>
                  0 kcal
                </Text>
              </View>
            </View>
            <View
              style={{
                padding: 12,
                alignItems: 'center',
                borderRadius: 16,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity style={{backgroundColor: Colors.backgroundColorsSecondary, padding: 12, borderRadius: 16}} onPress={pause}>
                <Icon name="pause" size={48} color={Colors.light} />
              </TouchableOpacity>
              <StopwatchTimer
                ref={stopwatchTimerRef}
                decimalSeparator="."
                enterAnimationType="slide-in-down"
                containerStyle={{flex: 1, alignItems: `center`, justifyContent: `center`}}
                textCharStyle={{color: Colors.light, fontSize: 54, fontFamily: Fonts.main, fontWeight: 'bold', letterSpacing: -2}}
              />
              <TouchableOpacity style={{backgroundColor: Colors.backgroundColorsSecondary, padding: 12, borderRadius: 16}} onPress={play}>
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
  text: {
    color: Colors.light,
    fontSize: 20,
    fontFamily: Fonts.main,
  },
  map: {
    width: '100%',
    height: '100%',
    marginTop: -32,
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
  },
});
