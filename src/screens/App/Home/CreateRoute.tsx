import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
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
import MapViewDirections from 'react-native-maps-directions';

export default function CreateRouteScreen() {
  const nav = useNavigation();
  const [selectedTab, setSelectedTab] = useState('places'); // Aktif sekme (places / map)
  const [selectedPlaces, setSelectedPlaces] = useState([]); // Seçilen yerler
  const GOOGLE_MAPS_APIKEY = 'AIzaSyB4JO7I3nUkkonlX-NvfasHvx1u06DxOS8';

  const [duration, setDuration] = React.useState(0);
  const [distance, setDistance] = React.useState(0);

  const togglePlaceSelection = (index: number) => {
    let newSelectedPlaces = [...selectedPlaces];

    if (newSelectedPlaces.includes(index)) {
      newSelectedPlaces = newSelectedPlaces.filter(item => item !== index);
    } else {
      newSelectedPlaces.push(index);
    }

    setSelectedPlaces(newSelectedPlaces);
  };

  return (
    <View style={styles.container}>
      {/* Üst Kısım */}
      <View style={styles.header}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Image style={styles.avatar} source={require('../../assets/images/avatar.jpg')} />
          <View style={{flex: 1, marginLeft: 16}}>
            <Text style={styles.headerTitle}>Hmm, Let's Go!!</Text>
            <Text style={styles.headerSubtitle}>Choose places to create a route</Text>
          </View>
        </View>
        <Button type="secondary" title="Go" onPress={() => nav.navigate('Ride', {places: selectedPlaces})} style={{flex: 0.3}} />
      </View>

      {/* Sekmeler */}
      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, selectedTab === 'places' && styles.activeTab]} onPress={() => setSelectedTab('places')}>
          <Text style={styles.tabText}>📍 Yerler</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.tab, selectedTab === 'map' && styles.activeTab]} onPress={() => setSelectedTab('map')}>
          <Text style={styles.tabText}>🗺️ Harita</Text>
        </TouchableOpacity>
      </View>

      {/* İçerik Alanı */}
      {selectedTab === 'places' ? (
        // 📍 Yerler Sekmesi
        <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, padding: 8}}>
          {PlacesList.locations.map((place, index) => (
            <TouchableOpacity key={index} onPress={() => togglePlaceSelection(index)}>
              <View style={[styles.placeCard, selectedPlaces.includes(index) && styles.selectedCard]}>
                <View style={{flex: 1}}>
                  <Text style={styles.placeName}>{place.name}</Text>
                  <Text style={styles.placeDescription}>{place.description}</Text>
                </View>
                <Icon
                  name={selectedPlaces.includes(index) ? 'checkbox-marked-circle' : 'checkbox-blank-circle-outline'}
                  size={24}
                  color={selectedPlaces.includes(index) ? Colors.primary : Colors.light}
                />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={{flex: 1, backgroundColor: Colors.dark, paddingBottom: 12}}>
              <Text style={{color: Colors.gray, textAlign: 'center', fontFamily: Fonts.main, fontSize: 12, fontWeight: 'bold'}}>Duration (Min)</Text>
              <Text style={{color: Colors.light, textAlign: 'center', fontFamily: Fonts.main, fontSize: 16, fontWeight: 'bold'}}>{duration.toFixed(2)} min</Text>
            </View>
            <View style={{flex: 1, backgroundColor: Colors.dark, paddingBottom: 12}}>
              <Text style={{color: Colors.gray, textAlign: 'center', fontFamily: Fonts.main, fontSize: 12, fontWeight: 'bold'}}>Distance (Km)</Text>
              <Text style={{color: Colors.light, textAlign: 'center', fontFamily: Fonts.main, fontSize: 16, fontWeight: 'bold'}}>{distance.toFixed(2)} km</Text>
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
            {selectedPlaces.length > 0 &&
              selectedPlaces.map(index => {
                const place = PlacesList.locations[index];
                return (
                  <Marker key={index} coordinate={place.coordinates} title={place.name} description={place.description} tracksViewChanges={false}>
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
                      <Icon name="near-me" size={12} color={Colors.light} />
                      <Text style={{color: Colors.light, fontFamily: Fonts.main, fontSize: 10}}>
                        {index + 1} {place.name}
                      </Text>
                    </View>
                  </Marker>
                );
              })}

            {selectedPlaces.length > 0 && (
              <MapViewDirections
                origin={PlacesList.locations[selectedPlaces[0]].coordinates}
                destination={PlacesList.locations[selectedPlaces[selectedPlaces.length - 1]].coordinates}
                waypoints={selectedPlaces.slice(1, -1).map(index => PlacesList.locations[index].coordinates)}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                mode="DRIVING"
                strokeColor={Colors.primary}
                onReady={result => {
                  setDuration(result.duration);
                  setDistance(result.distance);
                }}
              />
            )}
          </MapView>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 32,
    padding: 16,
    borderRadius: 16,
    zIndex: 1,
    backgroundColor: Colors.backgroundColorsSecondary,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 32,
  },
  headerTitle: {
    color: Colors.light,
    fontSize: 20,
    fontFamily: Fonts.main,
  },
  headerSubtitle: {
    color: Colors.gray,
    fontSize: 14,
    fontFamily: Fonts.interRegular,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.dark,
    paddingVertical: 10,
  },
  tab: {
    paddingVertical: 8,
    flex: 1,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
  },
  tabText: {
    fontSize: 16,
    color: Colors.light,
    fontFamily: Fonts.interRegular,
  },
  placeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 16,
    padding: 16,
    backgroundColor: Colors.backgroundColorsSecondary,
    marginTop: 12,
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  placeName: {
    color: Colors.light,
    fontSize: 18,
    fontFamily: Fonts.main,
  },
  placeDescription: {
    color: Colors.gray,
    fontSize: 12,
    fontFamily: Fonts.interRegular,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
