import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getUsersByGroupId} from '../../api/groupService';
import {getEvents} from '../../api/eventService';
//Api
import {getAddressFromCoords} from '../../api/locationService';

const GroupDetailScreen = () => {
  const nav = useNavigation();
  const route = useRoute();
  const {group} = route.params;
  const [activeTab, setActiveTab] = useState<'users' | 'events'>('users');
  const [users, setUsers] = useState(group.users || []);
  const [events, setEvents] = useState(group.events || []);
  const [eventsWithAddress, setEventsWithAddress] = useState([]);
  const [isMember, setIsMember] = useState(false);

  const handleJoinGroup = () => {
    setIsMember(!isMember);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getUsersByGroupId(group._id);
        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    const fetchEvents = async () => {
      try {
        const fetchedEvents = await getEvents(group._id);

        const enrichedEvents = await Promise.all(
          fetchedEvents.map(async event => {
            const {latitude, longitude} = event.location;
            const address = await getAddressFromCoords(latitude, longitude);
            return {
              ...event,
              addressString: address,
            };
          }),
        );

        setEventsWithAddress(enrichedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchUsers();
    fetchEvents();
  }, [group.id]);

  return (
    <View style={styles.container}>
      {/* Grup Başlık Bölümü */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.groupName}>{group.name}</Text>
          <View style={styles.headerIcons}>
            <Icon name="plus" size={32} color={Colors.light} onPress={() => nav.navigate('CreateEvent' as never)} />
          </View>
        </View>
      </View>

      {/* Grup Detayları ve Sekmeler */}
      <ScrollView style={styles.content}>
        <View style={styles.groupInfo}>
          <Image source={{uri: group.imageURL}} style={styles.groupImage} />
          <Text style={styles.groupDescription}>{group.description}</Text>
          <View style={styles.groupStats}>
            <View style={styles.statItem}>
              <Text style={styles.statText}>👥 {group.membersCount} Üye</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statText}>📍 {group.location}</Text>
            </View>
          </View>
        </View>

        {/* Sekme Butonları */}
        <View style={styles.tabContainer}>
          <TouchableOpacity style={[styles.tabButton, activeTab === 'users' && styles.activeTab]} onPress={() => setActiveTab('users')}>
            <Text style={styles.tabText}>Üyeler</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tabButton, activeTab === 'events' && styles.activeTab]} onPress={() => setActiveTab('events')}>
            <Text style={styles.tabText}>Etkinlikler</Text>
          </TouchableOpacity>
        </View>

        {/* Tab Content */}
        {activeTab === 'users' ? (
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
        ) : (
          <FlatList
            data={eventsWithAddress}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.eventCard}>
                <Text style={styles.eventTitle}>{item.title}</Text>
                <View style={styles.eventDetails}>
                  <View style={styles.eventDetailItem}>
                    <Icon name="calendar" size={16} color={Colors.light} />
                    <Text style={styles.eventDetailText}>{item.startDate}</Text>
                  </View>
                  <View style={styles.eventDetailItem}>
                    <Icon name="map-marker" size={16} color={Colors.light} />
                    <Text style={styles.eventDetailText}>{item.addressString}</Text>
                  </View>
                </View>
              </View>
            )}
            scrollEnabled={false}
          />
        )}
      </ScrollView>

      {/* Sabit Katıl Butonu */}
      <View style={styles.joinButtonContainer}>
        <TouchableOpacity style={[styles.joinButton, isMember && styles.leaveButton]} onPress={handleJoinGroup}>
          <Text style={styles.joinButtonText}>{isMember ? 'Gruptan Ayrıl' : 'Gruba Katıl'}</Text>
          <Icon name={isMember ? 'account-minus' : 'account-plus'} size={24} color={Colors.light} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColorsPrimary,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20, // Butonun üstüne içerik gelmesini engellemek için
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grayDark,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 8,
    marginTop: 12,
  },
  groupName: {
    fontSize: 24,
    fontFamily: Fonts.interBold,
    color: Colors.light,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 16,
  },
  groupInfo: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  groupImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  groupDescription: {
    fontSize: 16,
    color: Colors.light,
    marginBottom: 16,
    fontFamily: Fonts.interRegular,
  },
  groupStats: {
    flexDirection: 'row',
    gap: 24,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statText: {
    color: Colors.light,
    fontFamily: Fonts.interMedium,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grayDark,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
  },
  tabText: {
    color: Colors.light,
    fontFamily: Fonts.interMedium,
    fontSize: 16,
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
  eventCard: {
    padding: 16,
    backgroundColor: Colors.backgroundColorsSecondary,
    borderRadius: 8,
    marginBottom: 12,
    marginHorizontal: 16,
  },
  eventTitle: {
    color: Colors.light,
    fontFamily: Fonts.interBold,
    fontSize: 18,
    marginBottom: 8,
  },
  eventDetails: {
    gap: 8,
  },
  eventDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  eventDetailText: {
    color: Colors.light,
    fontFamily: Fonts.interRegular,
    fontSize: 14,
  },
  joinButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
  },
  joinButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    elevation: 3,
  },
  leaveButton: {
    backgroundColor: Colors.error,
  },
  joinButtonText: {
    color: Colors.light,
    fontFamily: Fonts.interBold,
    fontSize: 18,
  },
});

export default GroupDetailScreen;
