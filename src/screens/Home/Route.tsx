import {StyleSheet, Text, View, ScrollView, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../styles/Colors';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Button from '../../components/Button';
import {CustomMapStyle} from '../../styles/MapStyle';
import {useNavigation, RouteProp} from '@react-navigation/native';
import {getRouteDetails} from '../../api/routesService';

type RouteScreenParams = {
  routeId: string;
  title: string;
  description: string;
  distance: string;
  estimatedTime: string;
  elevationGain: string;
  difficulty: string;
  waypoints: Array<{
    lat: number;
    long: number;
  }>;
};

type RouteScreenRouteProp = RouteProp<{Route: RouteScreenParams}, 'Route'>;

export default function RouteScreen({route}: RouteScreenRouteProp) {
  const navigation = useNavigation();
  const {routeId} = route.params;
  const [routeDetails, setRouteDetails] = React.useState<RouteScreenParams | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    const fetchRouteDetails = async () => {
      try {
        const response = await getRouteDetails(routeId);
        console.log(response);
        setRouteDetails(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRouteDetails();
  }, [routeId]);

  if (loading) {
    return <ActivityIndicator size="large" color={Colors.primary} />;
  }

  if (error) {
    return <Text style={{color: Colors.error}}>Error: {error}</Text>;
  }

  if (!routeDetails) {
    return <Text style={{color: Colors.error}}>No route details found</Text>;
  }

  const handleSaveRoute = () => {
    console.log('Route saved!');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.mapContainer}>
          <MapView provider={PROVIDER_GOOGLE} style={styles.map} customMapStyle={CustomMapStyle}></MapView>
        </View>

        <Text style={styles.routeTitle}>{routeDetails.title}</Text>

        <View style={styles.detailCard}>
          <Text style={styles.sectionTitle}>Route Details</Text>
          <DetailRow icon="directions-walk" title="Distance" value={routeDetails.distance} />
          <DetailRow icon="access-time" title="Estimated Time" value={routeDetails.estimatedTime} />
          <DetailRow icon="terrain" title="Starting Point" value={routeDetails.elevationGain} />
          <DetailRow icon="flag" title="Difficulty" value={routeDetails.difficulty} />
        </View>

        <View style={styles.descriptionSection}>
          <Text style={styles.sectionTitle}>About the Route</Text>
          <Text style={styles.descriptionText}>{routeDetails.description}</Text>
        </View>
      </ScrollView>

      <Button onPress={handleSaveRoute} title="Save Route" style={{width: '60%', marginHorizontal: 'auto'}} />
    </View>
  );
}

interface DetailRowProps {
  icon: string;
  title: string;
  value: string;
}
const DetailRow: React.FC<DetailRowProps> = ({icon, title, value}) => (
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
    width: '100%',
    height: 320,
    overflow: 'hidden',
    borderRadius: 32,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  routeTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.light,
    marginHorizontal: 20,
    marginTop: 16,
    textAlign: 'center',
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
