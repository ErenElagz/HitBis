// React
import React, {useRef, useCallback, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
// Styles
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomMapStyle} from '../../styles/MapStyle';
// Libraries
import {useNavigation} from '@react-navigation/native';
// Components
import Button from '../../components/Button';
import StationsList from '../../data/stations';
import MapView from 'react-native-map-clustering';
import {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

export default function RentScreen() {
  const nav = useNavigation();
  const [currentStation, setCurrentStation] = useState(null);
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
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
          clusterColor="#000"
          customMapStyle={CustomMapStyle}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          initialRegion={{
            longitude: 28.9784,
            latitude: 41.0082,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {StationsList.map((station, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: station.coordinate.latitude,
                longitude: station.coordinate.longitude,
              }}
              title={station.title}
              onPress={() => {
                setCurrentStation(index);
                bottomSheetRef.current?.expand();
              }}
              tracksViewChanges={false}>
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
                <Icon name="bike" size={12} color={Colors.light} />
                <Text style={{color: Colors.light, fontFamily: Fonts.main, fontSize: 10}}>{station.id}</Text>
              </View>
            </Marker>
          ))}
        </MapView>
      </View>
      <BottomSheet
        backgroundStyle={{
          backgroundColor: Colors.backgroundColor,
        }}
        ref={bottomSheetRef}
        handleIndicatorStyle={{backgroundColor: Colors.light}}
        onChange={handleSheetChanges}
        snapPoints={['15%', '45%']}>
        <BottomSheetView style={styles.contentContainer}>
          <View
            style={{
              flex: 1,
              gap: 4,
            }}>
            <View style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
              <View style={{backgroundColor: Colors.backgroundColorsSecondary, padding: 8, borderRadius: 8}}>
                <Icon
                  name="bike"
                  size={48}
                  color={Colors.light}
                  style={{
                    padding: 8,
                    borderColor: Colors.light,
                  }}
                />
              </View>
              <View style={{flex: 1, gap: 4}}>
                <Text style={{color: Colors.light, fontSize: 20, fontFamily: Fonts.main}}>{currentStation !== null ? StationsList[currentStation].title : 'Station'}</Text>
                <Text style={{color: Colors.gray, fontSize: 14, fontFamily: Fonts.main}}>
                  {currentStation !== null ? StationsList[currentStation].description : 'Choose any Station to the see details'}
                </Text>
              </View>
            </View>

            <Text style={{color: Colors.light, marginTop: 16, fontSize: 24, fontFamily: Fonts.main}}>Available Bikes</Text>
            <View
              style={{
                marginTop: 8,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
                flexWrap: 'wrap',
              }}>
              {currentStation !== null &&
                StationsList[currentStation].slots.map((slot, index) => (
                  <View
                    key={index}
                    style={{
                      backgroundColor: slot === 1 ? Colors.green : Colors.secondaryDark,
                      padding: 14,
                      borderRadius: 8,
                      borderColor: Colors.borderColor,
                      borderWidth: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 4,
                    }}>
                    <Icon name="bike" size={24} color={Colors.light} />
                  </View>
                ))}
            </View>
          </View>
          <Button title="Scan QR Code" type="secondary" icon="qrcode" onPress={() => nav.navigate('Camera' as never)} />
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    padding: 16,
  },
});
