import {StyleSheet, Text, Image, View, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import Colors from '../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '../../components/Button';
//api
import {getEventById, joinEvent} from '../../api/eventService';
import Toast from 'react-native-toast-message';

export default function EventScreen(route: any) {
  const [eventData, setEventData] = React.useState([]);
  const {id, addressString, participants} = route.route.params;

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const data = await getEventById(id);
        setEventData(data);
      } catch (error) {
        console.error('Failed to fetch event data:', error);
      }
    };
    fetchEventData();
  }, []);

  const handleSaveEvent = async () => {
    await joinEvent(id)
      .then(response => {
        if (response.status === 400) {
          return Toast.show({
            type: 'error',
            text1: 'Bu etkinliğe zaten katıldınız!',
          });
        }
        if (response.status === 401) {
          return Toast.show({
            type: 'error',
            text1: 'Grup Uyesi degilsiniz.',
            text2: 'Etkinliğe katılmak için bir gruba üye olmalısınız.',
          });
        }
        if (response.data.isSuccess == true) {
          return Toast.show({
            type: 'success',
            text1: 'Etkinliğe katıldınız!',
            text2: 'Etkinlik detaylarını profilinizden görebilirsiniz.',
          });
        }
      })
      .catch(error => {
        console.error('Failed to join event:', error);
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Image source={{uri: eventData.imageUrl}} style={styles.eventImage} resizeMode="cover" />

        <Text style={styles.eventTitle}>{eventData.title}</Text>

        <View style={styles.detailCard}>
          <Text style={styles.sectionTitle}>Event Details</Text>
          <DetailRow icon="calendar-today" title="Date" value={eventData.startDate} />
          <DetailRow icon="location-pin" title="Location" value={addressString} />
          <DetailRow icon="people" title="Participants" value={participants} />
          <DetailRow icon="terrain" title="Difficulty" value={eventData.difficulty} />
        </View>

        <View style={styles.descriptionSection}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{eventData.description}</Text>
        </View>
      </ScrollView>

      {eventData.isActive && <Button onPress={handleSaveEvent} title="Katılıyorumn" style={{width: '60%', marginHorizontal: 'auto'}} />}
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
