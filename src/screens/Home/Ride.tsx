// React
import React, {useRef, useCallback} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
// Styles
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomMapStyle} from '../../styles/MapStyle';
// Libraries
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
// Components
import Button from '../../components/Button';
import PlacesList from '../../data/places';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import Header from '../../components/Header';

export default function RideScreen() {
  const nav = useNavigation();
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <View style={styles.container}>
      <GestureHandlerRootView>
        <Header title="Ride" description="Start your ride now!" button onPress={() => nav.goBack()} />
        <MapView
          customMapStyle={CustomMapStyle}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 41.0082,
            longitude: 28.9784,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}></MapView>
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
              <Icon name="pause" size={36} color={Colors.light} />
              <Text
                style={{
                  textAlign: 'center',
                  color: Colors.light,
                  fontSize: 54,
                  fontFamily: Fonts.main,
                }}>
                00:00:00
              </Text>
              <Icon name="play" size={36} color={Colors.light} />
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
