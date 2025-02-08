// React
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
// Styles
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// Libraries
import {useNavigation} from '@react-navigation/native';
// Data
import NotificationsList from '../../data/notifications';

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
      <TouchableOpacity
        onPress={() => nav.goBack()}
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: 8,
          paddingLeft: 20,
          paddingBottom: 8,
        }}>
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
      <FlatList
        showsVerticalScrollIndicator={false}
        data={NotificationsList}
        renderItem={renderNotificationCard}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{padding: 16}}
        removeClippedSubviews={false}
      />
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
    backgroundColor: Colors.backgroundColorsSecondary,
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
