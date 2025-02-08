import React from 'react';
import {View, Text, StyleSheet, useColorScheme, TouchableOpacity} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Colors from '../../styles/Colors';
import {CustomMapStyle} from '../../styles/MapStyle';

interface RouteCardProps {
  id: string;
  name: string;
  description: string;
  distance: string;
  estimatedTime: string;
  difficulty: 'Kolay' | 'Orta' | 'Zor';
  startingPoint: string;
  endingPoint: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

const RouteCard: React.FC<RouteCardProps> = ({name, description, distance, estimatedTime, difficulty, startingPoint, endingPoint, coordinates}) => {
  return (
    <TouchableOpacity style={[styles.card]}>
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
          liteMode={true}
          customMapStyle={CustomMapStyle}>
          <Marker coordinate={coordinates} title={name} />
        </MapView>
      </View>

      <View style={styles.content}>
        <Text style={[styles.title]}>{name}</Text>
        <Text style={[styles.description]}>{description}</Text>

        <View style={styles.details}>
          <Text style={styles.detailText}>
            📍 {startingPoint} 🏁 {endingPoint}
          </Text>
          <Text style={styles.detailText}>📏 {distance}</Text>
          <Text style={styles.detailText}>⏳ {estimatedTime}</Text>
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
    width: 280,
    marginRight: 16,
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
