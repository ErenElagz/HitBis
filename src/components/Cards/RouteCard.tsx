import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Colors from '../../styles/Colors';
import {CustomMapStyle} from '../../styles/MapStyle';
import {useNavigation} from '@react-navigation/native';

interface RouteCardProps {
  _id: string;
  title: string;
  description: string;
  distance: string;
  elevationGain: string;
  difficulty: string;
  estimatedTime: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  style?: object;
}

const RouteCard: React.FC<RouteCardProps> = ({_id, title, description, estimatedTime, distance, elevationGain, difficulty, coordinates, style}) => {
  const nav = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.card, style]}
      onPress={() => {
        try {
          console.log(_id);
          nav.navigate('Route', {routeId: _id});
        } catch (e) {
          console.error('Failed to navigate to Route:', e);
        }
      }}>
      <View style={styles.mapContainer}>
        <MapView provider={PROVIDER_GOOGLE} style={styles.map} liteMode={true} customMapStyle={CustomMapStyle}>
          <Marker coordinate={coordinates} title={title} />
        </MapView>
      </View>

      <View style={styles.content}>
        <Text style={[styles.title]}>{title}</Text>
        <Text style={[styles.description]}>{description}</Text>

        <View style={styles.details}>
          <Text style={styles.detailText}>⏳ Tahmini Sure: {estimatedTime}</Text>
          <Text style={styles.detailText}>📏 Mesafe: {distance} km</Text>
          <Text style={styles.detailText}>📏 Tahmini Tirmanis: {elevationGain} m </Text>
          <Text style={[styles.difficulty, difficultyStyle(difficulty)]}>🔥 Zorluk: {difficulty}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// Zorluk Seviyesine Göre Renk Stili
const difficultyStyle = (difficulty: string) => ({
  color: difficulty === 'Kolay' ? '#2ecc71' : difficulty === 'Orta' ? '#f39c12' : '#e74c3c',
});

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    width: 300,
    marginRight: 16,
    backgroundColor: Colors.backgroundColorsSecondary,
  },
  mapContainer: {
    width: 360,
    height: 180,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light,
  },
  description: {
    fontSize: 12,
    marginTop: 4,
    color: Colors.gray,
  },
  details: {
    marginTop: 4,
  },
  detailText: {
    fontSize: 12,
    marginTop: 4,
    color: Colors.light,
  },
  difficulty: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default RouteCard;
