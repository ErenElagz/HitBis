import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import Colors from '../../styles/colors';
// Libraries
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {CustomMapStyle} from '../../utils/mapStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';
import StationsList from '../../data/stations';
import {ScrollView} from 'react-native';

const {width} = Dimensions.get('window');
export default function RentCycleScreen() {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          borderRadius: 32,
          overflow: 'hidden',
        }}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          customMapStyle={CustomMapStyle}
          initialRegion={{
            latitude: 41.0082,
            longitude: 28.9784,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}></MapView>
        <TouchableOpacity
          onPress={() => {
            nav.goBack();
          }}
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
          }}>
          <Icon name="chevron-left" size={28} color={Colors.light} />
        </TouchableOpacity>

        <View
          style={{
            position: 'absolute',
            bottom: 16,
            width: '94%',
            zIndex: 999,
            alignSelf: 'center',
            gap: 8,
          }}>
          <ScrollView horizontal style={{overflow: 'visible'}} showsHorizontalScrollIndicator={false}>
            {StationsList.map(station => {
              return (
                <View
                  key={station.id}
                  style={{
                    backgroundColor: Colors.backgroundColor,
                    padding: 16,
                    borderRadius: 16,
                    width: width - 128,
                    height: 160,
                    margin: 4,
                  }}>
                  <Text
                    style={{
                      color: Colors.light,
                      fontSize: 16,
                      fontWeight: 'bold',
                    }}>
                    {station.name}
                  </Text>
                  <Text
                    style={{
                      color: Colors.light,
                      fontSize: 14,
                    }}>{`Bike Count: ${station.bikeCount} Docked Count: ${station.dockedCount}`}</Text>
                </View>
              );
            })}
          </ScrollView>
          <Button
            title="Scan QR Code"
            type="tertiary"
            icon="qrcode-scan"
            onPress={() => {
              nav.navigate('QrScanScreen' as never);
            }}
          />
        </View>
      </View>
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
});
