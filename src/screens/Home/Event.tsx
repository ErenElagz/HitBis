import {StyleSheet, Text, Image, View, ScrollView, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import Colors from '../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '../../components/Button';
//api
import Toast from 'react-native-toast-message';
import {getEventById, joinEvent, isUserInEvent, leaveEvent, getEventUsers} from '../../api/eventService';
import Fonts from '../../styles/Fonts';
import {EventUser} from '../../types/userTypes';
import {EventDetail} from '../../types/eventTypes';

export default function EventScreen(route: any) {
  const [eventData, setEventData] = React.useState<EventDetail | null>(null);
  const {id, addressString, participants} = route.route.params;
  const [isJoin, setIsJoin] = React.useState(false);
  const [users, setUsers] = React.useState<EventUser[]>([]);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const data = await getEventById(id);
        setEventData(data);
      } catch (error) {
        console.error('Failed to fetch event data:', error);
      }
    };

    const checkUserInEvent = async () => {
      try {
        const result = await isUserInEvent(id);
        setIsJoin(result);
      } catch (error) {
        console.error('Failed to check user in event:', error);
      }
    };

    const fetchEventUsers = async () => {
      try {
        const usersData = await getEventUsers(id);
        console.log('usersData :>> ', usersData);
        setUsers(usersData);
      } catch (error) {
        console.error('Failed to fetch event users:', error);
      }
    };

    fetchEventUsers();
    checkUserInEvent();
    fetchEventData();
  }, []);

  const handleJoinEvent = async () => {
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
          setIsJoin(true);
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

  const handleLeaveEvent = async () => {
    await leaveEvent(id)
      .then(response => {
        if (response.status === 400) {
          return Toast.show({
            type: 'error',
            text1: 'Bu etkinliğe katılmadınız!',
          });
        }
        if (response.data.isSuccess == true) {
          setIsJoin(false);
          return Toast.show({
            type: 'success',
            text1: 'Etkinlikten ayrıldınız!',
            text2: 'Etkinlik detaylarını profilinizden görebilirsiniz.',
          });
        }
      })
      .catch(error => {
        console.error('Failed to leave event:', error);
      });
  };

  if (!eventData) {
    return (
      <View style={styles.container}>
        <Text style={{color: Colors.light, textAlign: 'center', marginTop: 20}}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Image source={{uri: eventData.imageUrl}} style={styles.eventImage} resizeMode="cover" />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.eventTitle}>{eventData.title}</Text>
          {<Button title="Cancel Event" style={styles.cancelButton} />}
        </View>

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
        <View>
          <FlatList
            data={users}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.userCard}>
                <Image source={{uri: item.avatar}} style={styles.userAvatar} />
                <Text style={styles.userName}>
                  {item.name} {item.surname}
                </Text>
              </View>
            )}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>

      {eventData.isActive &&
        (isJoin ? (
          <Button onPress={handleLeaveEvent} title="Leave Event" style={styles.leaveButton} />
        ) : (
          <Button onPress={handleJoinEvent} title="Join Event" style={{width: '60%', marginHorizontal: 'auto'}} />
        ))}
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
  cancelButton: {
    backgroundColor: Colors.red,
    width: '30%',
    marginHorizontal: 'auto',
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

  leaveButton: {
    backgroundColor: Colors.red,
    width: '60%',
    marginHorizontal: 'auto',
  },
  sectionTitle: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: Colors.backgroundColorsSecondary,
    borderRadius: 8,
    marginBottom: 8,
    marginHorizontal: 16,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userName: {
    color: Colors.light,
    fontFamily: Fonts.interMedium,
    fontSize: 16,
  },
  descriptionText: {
    color: Colors.light,
    fontSize: 16,
    lineHeight: 24,
    opacity: 0.9,
  },
});
