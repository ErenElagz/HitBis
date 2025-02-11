import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Colors from '../../styles/Colors';
import {useNavigation} from '@react-navigation/native';

interface ActivityCardProps {
  id: string;
  name: string;
  description: string;
  date: string;
  duration: string;
  distance: string;
  caloriesBurned: number;
  category: string;
  location: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  style?: object;
}

const MyLastActivitiesCard: React.FC<ActivityCardProps> = ({name, description, date, duration, distance, caloriesBurned, category, location, coordinates, style}) => {
  const nav = useNavigation();

  return (
    <View style={[styles.card, style]}>
      {/* Google Maps Harita */}
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          liteMode={true}>
          <Marker coordinate={coordinates} title={name} />
        </MapView>
      </View>

      {/* Aktivite Bilgileri */}
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>

        <View style={styles.details}>
          <Text style={styles.detailText}>📅 {date}</Text>
          <Text style={styles.detailText}>⏳ Süre: {duration}</Text>
          <Text style={styles.detailText}>📏 Mesafe: {distance}</Text>
          <Text style={styles.detailText}>🔥 Kalori: {caloriesBurned} kcal</Text>
          <Text style={styles.detailText}>🏆 Kategori: {category}</Text>
          <Text style={styles.detailText}>📍 Konum: {location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    width: 300,
    backgroundColor: Colors.backgroundColorsSecondary,
  },
  mapContainer: {
    width: '100%',
    height: 160,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.light,
  },
  description: {
    fontSize: 14,
    marginTop: 8,
    color: Colors.gray,
  },
  details: {
    marginTop: 8,
  },
  detailText: {
    fontSize: 14,
    marginTop: 4,
    color: Colors.gray,
  },
});

export default MyLastActivitiesCard;
