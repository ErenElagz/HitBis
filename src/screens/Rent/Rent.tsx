// React
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
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

export default function RentScreen() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        title="Scan QR Code"
        type="tertiary"
        icon="qrcode"
        style={{width: '94%', alignSelf: 'center', marginTop: 16, position: 'absolute', bottom: 16, zIndex: 999}}
        onPress={() => nav.navigate('Camera' as never)}
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
});
