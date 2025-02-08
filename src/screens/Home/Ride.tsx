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
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';

// Components
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import StopwatchTimer, {StopwatchTimerMethods} from 'react-native-animated-stopwatch-timer';

export default function RideScreen() {
  const nav = useNavigation();
  const bottomSheetRef = useRef<BottomSheet>(null);

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
          customMapStyle={CustomMapStyle}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 41.0082,
            longitude: 28.9784,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}
        />
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
                paddingBottom: 0,
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
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: 12,
                paddingTop: 0,
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
