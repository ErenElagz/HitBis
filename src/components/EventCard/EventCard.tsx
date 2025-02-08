import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../styles/Colors';

interface EventCardProps {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  location: string;
  participants: number;
  difficulty: 'Kolay' | 'Orta' | 'Zor';
  organizer: string;
  image: string;
}

const EventCard: React.FC<EventCardProps> = ({name, description, date, time, location, participants, difficulty, organizer, image}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.organizer}>{organizer}</Text>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>

        <View style={styles.details}>
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>
              {date} - {time}
            </Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>{location}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>{participants} Katılımcı</Text>
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
    marginRight: 16,
    width: 280,
  },
  image: {
    width: '100%',
    height: 120,
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
  organizer: {
    fontSize: 16,
    marginTop: 5,
    color: '#aaa',
  },
});

export default EventCard;
