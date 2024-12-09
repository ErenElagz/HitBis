import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../styles/colors';
// Libraries
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {CustomMapStyle} from '../../utils/mapStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';

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
          customMapStyle={CustomMapStyle}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 41.0082,
            longitude: 28.9784,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: 41.0082,
              longitude: 28.9784,
            }}
            title="Istanbul"
            description="Istanbul, Turkey"
          />
        </MapView>
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
          }}>
          <Icon
            name="chevron-left"
            size={28}
            color={Colors.light}
            onPress={() => {
              nav.goBack();
            }}
          />
        </TouchableOpacity>

        <Button
          title="Scan QR Code"
          type="tertiary"
          icon = "qrcode-scan"
          style={{
            position: 'absolute',
            bottom: 16,
            width: '94%',
            alignSelf: 'center',
          }}
          onPress={() => {
            nav.navigate('QrScanScreen' as never);
          }}
        />
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
