import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Colors from '../../styles/Colors';
import {useNavigation} from '@react-navigation/native';

interface ActivityCardProps {
  id: string;
  name: string;
  description: string;
  endTime: string;
  duration: string;
  distance: string;
  burnedCalories: number;
  avgSpeed: number;
  elevationGain: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  style?: object;
}

const ActivityCard: React.FC<ActivityCardProps> = ({name, description, endTime, duration, distance, burnedCalories, avgSpeed, elevationGain, coordinates, style}) => {
  const nav = useNavigation();

  return (
    <View style={[styles.card, style]}>
      <View style={styles.mapContainer}>
        <MapView provider={PROVIDER_GOOGLE} style={styles.map} liteMode={true}>
          <Marker coordinate={coordinates} title={name} />
        </MapView>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
        <View style={styles.details}>
          <Text style={styles.detailText}>📅 {endTime}</Text>
          <Text style={styles.detailText}>⏳ Süre: {duration} Minutes</Text>
          <Text style={styles.detailText}>📏 Mesafe: {distance} Km</Text>
          <Text style={styles.detailText}>🔥 Kalori: {burnedCalories} kcal</Text>
          <Text style={styles.detailText}>🏆 Avg Speed: {avgSpeed} km/s</Text>
          <Text style={styles.detailText}>📍 Tırmanma: {elevationGain} m</Text>
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
    minWidth: '100%',
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

export default ActivityCard;
