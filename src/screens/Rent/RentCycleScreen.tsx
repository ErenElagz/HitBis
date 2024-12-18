import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import Colors from '../../styles/colors';
// Libraries
import MapView, {Marker, PROVIDER_DEFAULT} from 'react-native-maps';
import {CustomMapStyle} from '../../utils/mapStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';
import StationsList from '../../data/stations';

const {width} = Dimensions.get('window');

export default function RentCycleScreen() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_DEFAULT}
        customMapStyle={CustomMapStyle}
        initialRegion={{
          latitude: 41.0082,
          longitude: 28.9784,
          latitudeDelta: 0.2, // Harita kapsama alanını genişlettim
          longitudeDelta: 0.2,
        }}>
      </MapView>

      {/* Geri Dön Butonu */}
      <TouchableOpacity
        onPress={() => {
          nav.goBack();
        }}
        style={styles.backButton}>
        <Icon name="chevron-left" size={28} color={Colors.light} />
      </TouchableOpacity>

      {/* İstasyon Detayları ve QR Kod */}
      <View style={styles.detailsContainer}>
        <ScrollView horizontal style={styles.stationScrollView} showsHorizontalScrollIndicator={false}>
          {StationsList.map(station => (
            <View key={station.id} style={styles.stationCard}>
              <Text style={styles.stationName}>{station.name}</Text>
              <Text style={styles.stationText}>{`Docked Count: ${station.dockedCount}`}</Text>
              <Text style={styles.stationText}>{`Bike Count: ${station.bikeCount}`}</Text>
            </View>
          ))}
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
  backButton: {
    position: 'absolute',
    top: 24,
    left: 16,
    backgroundColor: Colors.backgroundColor,
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  detailsContainer: {
    position: 'absolute',
    bottom: 16,
    width: '94%',
    alignSelf: 'center',
    gap: 8,
    zIndex: 999,
  },
  stationScrollView: {
    overflow: 'visible',
  },
  stationCard: {
    backgroundColor: Colors.secondary,
    padding: 16,
    borderRadius: 16,
    width: width - 128,
    height: 160,
    margin: 4,
  },
  stationName: {
    color: Colors.light,
    fontSize: 28,
    fontWeight: 'bold',
  },
  stationText: {
    color: Colors.light,
    fontSize: 16,
    marginTop: 8,
  },
});
