import {StyleSheet, Text, Image, View, ScrollView} from 'react-native';
import React from 'react';
import Colors from '../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '../../components/Button';

export default function EventScreen(route: any) {
  const {name, description, date, time, location, participants, difficulty, organizer, image} = route.route.params;

  const handleSaveEvent = () => {
    console.log('Event saved!');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Image source={{uri: image}} style={styles.eventImage} resizeMode="cover" />

        <Text style={styles.eventTitle}>{name}</Text>

        <View style={styles.detailCard}>
          <Text style={styles.sectionTitle}>Event Details</Text>
          <DetailRow icon="calendar-today" title="Date" value={date} />
          <DetailRow icon="access-time" title="Time" value={time} />
          <DetailRow icon="location-pin" title="Location" value={location} />
          <DetailRow icon="people" title="Participants" value={participants} />
          <DetailRow icon="terrain" title="Difficulty" value={difficulty} />
          <DetailRow icon="person" title="Organizer" value={organizer} />
        </View>

        <View style={styles.descriptionSection}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
      </ScrollView>

      <Button onPress={handleSaveEvent} title="Save Event" style={{width: '60%', marginHorizontal: 'auto'}} />
    </View>
  );
}

const DetailRow = ({icon, title, value}) => (
  <View style={styles.detailRow}>
    <Icon name={icon} size={24} color={Colors.primary} />
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
  eventImage: {
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  eventTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.light,
    marginHorizontal: 20,
    marginVertical: 15,
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
});
