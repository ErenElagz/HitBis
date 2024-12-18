import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView} from 'react-native-safe-area-context';

const notifications = [
  {
    id: 1,
    type: 'rental',
    title: 'Rental Confirmation',
    message: 'Your bike rental for 2 hours has been confirmed!',
    timestamp: '2024-12-18T10:30:00Z',
  },
  {
    id: 2,
    type: 'social',
    title: 'New Friend Request',
    message: 'JohnDoe wants to connect with you!',
    timestamp: '2024-12-18T11:00:00Z',
  },
  {
    id: 3,
    type: 'event',
    title: 'Cycling Event Nearby',
    message: 'Join the community ride at Central Park this Sunday!',
    timestamp: '2024-12-18T12:00:00Z',
  },
  {
    id: 4,
    type: 'reminder',
    title: 'Bike Return Reminder',
    message: 'You have 15 minutes left to return the bike.',
    timestamp: '2024-12-18T12:15:00Z',
  },
  {
    id: 5,
    type: 'achievement',
    title: 'Achievement Unlocked!',
    message: 'Congratulations! You completed 50 rides this month.',
    timestamp: '2024-12-18T13:00:00Z',
  },
  {
    id: 6,
    type: 'promotion',
    title: 'Special Offer!',
    message: 'Get 20% off your next bike rental. Offer valid until Dec 31.',
    timestamp: '2024-12-18T14:00:00Z',
  },
  {
    id: 7,
    type: 'system',
    title: 'System Maintenance',
    message: 'Scheduled maintenance on Dec 20 from 2 AM to 4 AM.',
    timestamp: '2024-12-18T15:00:00Z',
  },
  {
    id: 8,
    type: 'event',
    title: 'Weekly Leaderboard Update',
    message: 'You are now ranked #5 in your city! Keep cycling to climb higher.',
    timestamp: '2024-12-18T16:00:00Z',
  },
];

export default function NotificationsScreen() {
  const nav = useNavigation();

  const renderNotificationCard = ({item}: any) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.message}>{item.message}</Text>
      <Text style={styles.timestamp}>{new Date(item.timestamp).toLocaleString()}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => nav.goBack()} style={{flexDirection: 'row', alignItems: 'flex-start', gap: 8, paddingLeft: 20, paddingBottom: 8}}>
        <Icon name="arrow-left" size={20} color={Colors.light} />
        <Text
          style={{
            color: Colors.light,
            fontSize: 20,
            fontFamily: Fonts.interBold,
          }}>
          All Notifications
        </Text>
      </TouchableOpacity>
      <FlatList showsVerticalScrollIndicator={false} data={notifications} renderItem={renderNotificationCard} keyExtractor={item => item.id.toString()} contentContainerStyle={{padding: 16}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: Colors.backgroundColor,
  },
  card: {
    backgroundColor: Colors.backgroundColorSecondary,
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.interBold,
    color: Colors.light,
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
    fontFamily: Fonts.interRegular,
    color: Colors.gray,
    marginBottom: 12,
  },
  timestamp: {
    fontSize: 12,
    fontFamily: Fonts.interRegular,
    color: Colors.gray,
  },
});
