// React
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
// Styles
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomMapStyle} from '../../styles/MapStyle';
// Libraries
import {useNavigation} from '@react-navigation/native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import StationsList from '../../data/stations';
// Components
import Button from '../../components/Button';

// Constants
const {width} = Dimensions.get('window');

export default function RentScreen() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        customMapStyle={CustomMapStyle}
        loadingEnabled={true}
        initialRegion={{
          latitude: 41.0082,
          longitude: 28.9784,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}>
        {StationsList.map(place => (
          <Marker
            key={place.id}
            coordinate={place.coordinate}
            title={place.title}
            description={place.description}
          />
        ))}
      </MapView>
      <Button
        icon="arrow-left"
        type="secondary"
        style={styles.backButton}
        onPress={() => nav.navigate('Camera' as never)}
      />
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

  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
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
