// React
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
// Styles
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// Libraries
import {useNavigation} from '@react-navigation/native';
// Components
import RouteCard from '../../components/Cards/RouteCard';
import EventCard from '../../components/Cards/EventCard';
import {events} from '../../data/events';
import GroupCard from '../../components/Cards/GroupCard';
//API
import {getPublicRoutes} from '../../api/routesService';
import {getGroups} from '../../api/groupService';

export default function CommunityScreen() {
  const nav = useNavigation();
  const [popularRoutes, setPopularRoutes] = useState([]);
  const [GroupsList, setGroupsList] = useState([]);

  useEffect(() => {
    const fetchAllGroups = async () => {
      try {
        const groups = await getGroups();
        setGroupsList(groups);
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    };
    const fetchRoutes = async () => {
      try {
        const PublicRoutes = await getPublicRoutes();
        setPopularRoutes(PublicRoutes);
      } catch (error) {
        console.error('Error fetching public routes:', error);
      }
    };
    fetchRoutes();
    fetchAllGroups();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 8,
            marginTop: 12,
          }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: Fonts.interBold,
              color: Colors.light,
            }}>
            HitBis Community
          </Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 16,
            }}>
            <Icon name="magnify" size={32} color={Colors.light} onPress={() => nav.navigate('Search' as never)} />
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop: 16, marginLeft: 8}}>
          {popularRoutes.map(route => (
            <RouteCard key={route.id} {...route} />
          ))}
        </ScrollView>

        <View style={{marginTop: 24, width: '100%', gap: 8}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.text}>Groups</Text>
          </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop: 16, marginLeft: 8, marginBottom: 16}}>
          {GroupsList.map(group => (
            <GroupCard key={group.id} {...group} />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: Colors.backgroundColor,
  },
  text: {
    color: Colors.light,
    fontSize: 24,
  },
});
