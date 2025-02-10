import {StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../styles/Colors';
import MapView, {Polyline, Marker} from 'react-native-maps';
import Button from '../../components/Button';
export default function RouteScreen(route: any) {
  const {name, description, distance, estimatedTime, difficulty, startingPoint, endingPoint, coordinates} = route.route.params;

  const handleSaveRoute = () => {
    // Add your save route logic here
    console.log('Route saved!');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.routeTitle}>{name}</Text>

        <View style={styles.detailCard}>
          <Text style={styles.sectionTitle}>Route Details</Text>
          <DetailRow icon="directions-walk" title="Distance" value={distance} />
          <DetailRow icon="access-time" title="Estimated Time" value={estimatedTime} />
          <DetailRow icon="terrain" title="Difficulty" value={difficulty} />
          <DetailRow icon="place" title="Starting Point" value={startingPoint} />
          <DetailRow icon="flag" title="Ending Point" value={endingPoint} />
        </View>

        <View style={styles.descriptionSection}>
          <Text style={styles.sectionTitle}>About the Route</Text>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
      </ScrollView>

      <Button onPress={handleSaveRoute} title="Save Route" style={{width: '90%', marginHorizontal: 'auto'}} />
    </View>
  );
}

const DetailRow = ({icon, title, value}) => (
  <View style={styles.detailRow}>
    <Icon name={icon} size={20} color={Colors.primary} />
    <View style={styles.detailTextContainer}>
      <Text style={styles.detailTitle}>{title}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  scrollContent: {
    paddingBottom: 80,
  },
  mapContainer: {
    height: 300,
    margin: 15,
    borderRadius: 15,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  routeTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.light,
    marginHorizontal: 20,
    marginTop: 64,
    textAlign: 'left',
  },
  detailCard: {
    backgroundColor: Colors.backgroundColorsSecondary,
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  detailTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  detailTitle: {
    color: Colors.light,
    fontSize: 14,
    opacity: 0.8,
  },
  detailValue: {
    color: Colors.light,
    fontSize: 16,
    fontWeight: '500',
    marginTop: 2,
  },
  descriptionSection: {
    marginHorizontal: 15,
    marginVertical: 15,
  },
  sectionTitle: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  descriptionText: {
    color: Colors.light,
    fontSize: 16,
    lineHeight: 24,
    opacity: 0.9,
  },
  coordinatesSection: {
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 15,
    backgroundColor: Colors.secondary,
    borderRadius: 12,
  },
  coordinatesText: {
    color: Colors.light,
    fontSize: 12,
    opacity: 0.7,
    fontFamily: 'monospace',
  },
});
