import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList} from 'react-native';
import {RouteProp, useNavigation, useRoute, validatePathConfig} from '@react-navigation/native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/Button';
import EventCard from '../../components/Cards/EventCard';
import Toast from 'react-native-toast-message';
//Api
import {getAddressFromCoords} from '../../api/locationService';
import {joinGroup, isUserMemberOfGroup, leaveGroup, isUserAdminOfGroup, getUsersByGroupId} from '../../api/groupService';
import {getEvents, getEventUsersCount} from '../../api/eventService';
import {openSettings} from 'react-native-permissions';

type EventWithAddress = {
  id: string;
  title: string;
  startDate: string;
  location?: {
    latitude: number;
    longitude: number;
  };
  difficulty?: 'Kolay' | 'Orta' | 'Zor' | 'Medium' | 'Hard' | 'Easy';
};

type Group = {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  membersCount: number;
  location: string;
  users?: Array<{
    id: string;
    name: string;
    surname: string;
    avatar: string;
  }>;
};

type GroupDetailScreenRouteParams = {
  group: Group;
};

type RootStackParamList = {
  GroupDetail: GroupDetailScreenRouteParams;
};

const GroupDetailScreen = () => {
  const nav = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, 'GroupDetail'>>();
  const {group} = route.params;
  const [activeTab, setActiveTab] = useState<'users' | 'events'>('users');
  const [users, setUsers] = useState(group.users || []);
  const [events, setEvents] = useState<EventWithAddress[]>([]);
  const [isMember, setIsMember] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleJoinGroup = async () => {
    try {
      if (isMember) {
        const res = await leaveGroup(group._id);

        if (res.isSuccess === false && res.status === 403) {
          Toast.show({
            type: 'error',
            text1: 'Çıkılamıyor',
            text2: res.message || 'Grup yöneticisi olduğunuz için çıkış yapılamadı.',
          });
          return;
        }

        setIsMember(false);
        Toast.show({
          type: 'success',
          text1: 'Başarılı',
          text2: 'Gruptan ayrıldınız.',
        });
      } else {
        const res = await joinGroup(group._id);
        setIsMember(true);
        Toast.show({
          type: 'success',
          text1: 'Başarılı',
          text2: 'Gruba katıldınız.',
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Hata',
        text2: 'İşlem sırasında bir sorun oluştu.',
      });
      console.error('Grup işlemi hatası:', error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
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
        interface EventLocation {
          latitude: number;
          longitude: number;
        }

        interface Event {
          _id: string;
          title: string;
          startDate: string;
          location?: EventLocation;
          difficulty?: 'Kolay' | 'Orta' | 'Zor' | 'Medium' | 'Hard' | 'Easy';
        }
        setEvents(fetchedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    const checkMembership = async () => {
      try {
        const result = await isUserMemberOfGroup(group._id);
        if (result === true) {
          const isAdminResult = await isUserAdminOfGroup(group._id);
          setIsAdmin(isAdminResult);
        }
        setIsMember(result === true);
      } catch (error) {
        console.error('Error checking group membership:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
    fetchEvents();
    checkMembership();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.groupName}>{group.name}</Text>
          <View style={styles.headerIcons}>
            {isAdmin && <Icon name="plus" size={32} color={Colors.light} onPress={() => nav.navigate('CreateEvent' as never, {groupId: group._id})} />}
          </View>
        </View>
      </View>

      {/* Grup Detayları ve Sekmeler */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.groupInfo}>
          <Image source={{uri: group.imageUrl}} style={styles.groupImage} />
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
            data={events}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={{width: '100%', gap: 8}}>
                <EventCard key={item.id} {...item} />
              </View>
            )}
            scrollEnabled={false}
          />
        )}
      </ScrollView>

      <View style={styles.joinButtonContainer}>
        {isMember ? (
          <Button title="Leave Group" onPress={handleJoinGroup} style={[styles.leaveButton]} />
        ) : (
          <Button title="Join Group" onPress={handleJoinGroup} style={[styles.joinButton]} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20, // Butonun üstüne içerik gelmesini engellemek için
  },
  header: {
    paddingVertical: 20,
    paddingInline: 16,
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
    borderBottomColor: Colors.backgroundColorsSecondary,
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
    backgroundColor: Colors.red,
    fontSize: 18,
  },
  joinButtonText: {
    color: Colors.light,
    fontFamily: Fonts.interBold,
    fontSize: 18,
  },
});

export default GroupDetailScreen;
