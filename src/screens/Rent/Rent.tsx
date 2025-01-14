// React
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
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
import StationsList from '../../data/stations';

export default function RentScreen() {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          borderRadius: 32,
          overflow: 'hidden',
          gap: 16,
          flex: 1,
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
          {StationsList.map((station, index) => (
            <Marker
              key={index}
              coordinate={station.coordinate}
              title={station.title}
              description={station.description}>
              <Image
                source={require('../../assets/images/bike.png')}
                style={{width: 32, height: 32}}
              />
            </Marker>
          ))}
        </MapView>

        <TouchableOpacity
          style={{
            marginTop: 16,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            zIndex: 999,
            top: 16,
            right: 16,
            backgroundColor: Colors.dark,
            width: 48,
            height: 48,
            borderRadius: 16,
          }}>
          <Icon name="near-me" size={28} color={Colors.red} />
        </TouchableOpacity>
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
          <Icon name="arrow-left" size={28} color={Colors.light} />
        </TouchableOpacity>
        <Button
          title="Scan QR Code"
          type="tertiary"
          icon="qrcode"
          style={{width:"94%",alignSelf: 'center', marginTop: 16,position: 'absolute', bottom: 16}}
          onPress={() => nav.navigate('Camera' as never)}
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
  text: {
    color: Colors.light,
    fontSize: 16,
    fontFamily: Fonts.main,
  },
  text2: {
    color: Colors.light,
    fontSize: 24,
    fontFamily: Fonts.main,
    opacity: 0.8,
  },
  text3: {
    color: Colors.light,
    fontSize: 14,
    opacity: 0.4,
    fontFamily: Fonts.main,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
