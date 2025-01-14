// React
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
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
import PlacesList from '../../data/places';

export default function RideTogetherScreen() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 32,
          padding: 16,
          borderRadius: 32,
          zIndex: 1,
          backgroundColor: Colors.backgroundColorsSecondary,
        }}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Image
            style={{width: 48, height: 48, borderRadius: 32}}
            source={require('../../assets/images/avatar.jpg')}
          />
          <View style={{flex: 1, marginLeft: 16}}>
            <Text
              style={{
                color: Colors.light,
                fontSize: 20,
                fontFamily: Fonts.main,
              }}>
              Start a ride together
            </Text>
            <Text
              style={{
                color: Colors.gray,
                fontSize: 14,
                fontFamily: Fonts.interRegular,
              }}>
              Let's go together
            </Text>
          </View>
        </View>
      </View>
      <MapView
        customMapStyle={CustomMapStyle}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 41.0082,
          longitude: 28.9784,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}>
        {PlacesList.locations.map((place, index) => (
          <Marker
            key={index}
            coordinate={place.coordinates}
            title={place.name}
            description={place.description}
          />
        ))}
      </MapView>
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
    marginTop: -16,
  },
});
