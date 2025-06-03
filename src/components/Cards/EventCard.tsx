import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../styles/Colors';
import {useNavigation} from '@react-navigation/native';
//api
import {getAddressFromCoords} from '../../api/locationService';
import {getEventUsersCount} from '../../api/eventService';
import {serializer} from '../../../metro.config';
interface EventCardProps {
  id: string;
  title: string;
  description: string;
  startDate: string;
  location: {
    latitude: number;
    longitude: number;
  };
  participants: number;
  difficulty: 'Kolay' | 'Orta' | 'Zor' | 'Medium' | 'Hard' | 'Easy';
  imageUrl: string;
  style?: object;
}

const EventCard: React.FC<EventCardProps> = ({id, title, description, startDate, location, difficulty, imageUrl, style}) => {
  const [latitude, longitude] = [location.latitude, location.longitude];
  const [addressString, setAddressString] = React.useState<string>('Konum bilgisi yok');
  const [participants, setParticipants] = React.useState<number>(0);

  useEffect(() => {
    const formatAddress = async (longitude, latitude) => {
      const address: string = latitude && longitude ? await getAddressFromCoords(latitude, longitude) : 'Konum bilgisi yok';
      setAddressString(address);
    };
    const fetchEventUsersCount = async (eventId: string) => {
      try {
        const count = await getEventUsersCount(eventId);
        setParticipants(count);
      } catch (error) {
        console.error('Failed to fetch event users count:', error);
      }
    };
    fetchEventUsersCount(id);
    formatAddress(longitude, latitude);
  }),
    [];

  const nav = useNavigation();

  return (
    <TouchableOpacity
      style={[style, styles.card]}
      onPress={() => {
        try {
          console.log('difficulty :>> ', difficulty);

          nav.navigate('Event', {id, participants, addressString});
        } catch (e) {
          console.error('Failed to navigate to Event:', e);
        }
      }}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>

        <View style={styles.details}>
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>{startDate}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>{addressString}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>👥 {participants} Katılımcı</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: Colors.backgroundColorsSecondary,
    marginLeft: '5%',
    width: '90%',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 180,
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
    fontSize: 14,
    color: Colors.gray,
    marginTop: 8,
  },
  details: {
    marginTop: 8,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  detailText: {
    fontSize: 14,
    color: Colors.light,
  },
  difficulty: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#ff5733',
  },
});

export default EventCard;
