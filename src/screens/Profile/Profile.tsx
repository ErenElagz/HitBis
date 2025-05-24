// React
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
// Styles
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// Libraries
import {useNavigation} from '@react-navigation/native';
// Components
import Button from '../../components/Button';
// Datas
import popularRoutes from '../../data/routes.ts';
// Component
import RouteCard from '../../components/Cards/RouteCard.tsx';
import GroupsList from '../../data/groups.ts';
import GroupCard from '../../components/Cards/GroupCard.tsx';
import MyLastActivities from '../../data/activites.ts';
import MyLastActivitiesCard from '../../components/Cards/ActivityCard.tsx';
import StatsCard from '../../components/Cards/StatsCard.tsx';
//API

import {getActivities} from '../../api/activityService.js';
import {getStats} from '../../api/activityService.js';
import {getRoutes} from '../../api/routesService.js';
//context
import {useAuth} from '../../Context/authContext.tsx';

function ActivitiesTab() {
  const [activities, setActivities] = React.useState([]);

  React.useEffect(() => {
    async function fetchActivities() {
      try {
        const response = await getActivities();
        setActivities(response.data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    }
    fetchActivities();
  }, [activities]);

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {activities ? (
          activities.map(activity => <MyLastActivitiesCard key={activity._id} {...activity} style={{width: '100%', marginBottom: 16, marginRight: 0}} />)
        ) : (
          <View>
            <Text>Avtivite Bulunamadi</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

function GroupsTab() {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {GroupsList.map(route => (
          <GroupCard key={route.id} {...route} style={{width: '100%', marginBottom: 16, marginRight: 0}} />
        ))}
      </ScrollView>
    </View>
  );
}

function RoutesTab() {
  const [routes, setRoutes] = React.useState([]);

  React.useEffect(() => {
    async function fetchRoutes() {
      try {
        const response = await getRoutes();
        setRoutes(response);
      } catch (error) {
        console.error('Error fetching routes:', error);
      }
    }
    fetchRoutes();
  }, []);

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {routes ? (
          routes.map(route => <RouteCard key={route._id} {...route} style={{width: '100%', marginBottom: 16, marginRight: 0}} />)
        ) : (
          <View>
            <Text>Rota Bulunamadi</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

function StatsTab() {
  type Stats = {
    totalActivities?: number;
    totalCalories?: number;
    totalDistance?: number;
    totalDuration?: number;
    averageSpeed?: number;
  };

  const [stats, setStats] = React.useState<Stats>({totalActivities: 0, totalCalories: 0, totalDistance: 0, totalDuration: 0, averageSpeed: 0});

  React.useEffect(() => {
    async function fetchStats() {
      try {
        const response = await getStats();

        setStats(response.data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    }
    fetchStats();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <StatsCard
        totalActivities={stats.totalActivities}
        totalCaloriesBurned={stats.totalCalories}
        totalDuration={stats.totalDuration}
        totalDistance={stats.totalDistance}
        averageSpeed={stats.averageSpeed}
      />
    </View>
  );
}

export default function ProfileScreen() {
  const nav = useNavigation();
  const [tab, setTab] = React.useState('activities');
  const {user} = useAuth();
  function ShowTab(tabName: string) {
    switch (tabName) {
      case 'activities':
        return <ActivitiesTab />;
      case 'groups':
        return <GroupsTab />;
      case 'routes':
        return <RoutesTab />;
      case 'stats':
        return <StatsTab />;
      default:
        return <ActivitiesTab />;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            gap: 16,
            paddingHorizontal: 16,
          }}>
          <Image source={user?.avatar ? {uri: user.avatar} : undefined} style={{width: 60, height: 60, borderRadius: 999}} />
          <Text style={styles.textUsername}>{user?.username}</Text>
        </View>
        <View
          style={{
            marginTop: 24,
            gap: 8,
            flexDirection: 'row',
          }}>
          <Button
            icon="cog"
            type="tertiary"
            title="Settings"
            style={{flex: 1}}
            onPress={() => {
              nav.navigate('Settings' as never);
            }}
          />
          <Button
            icon="archive-outline"
            title="Notfications"
            type="tertiary"
            style={{flex: 1}}
            onPress={() => {
              nav.navigate('Notifications' as never);
            }}
          />
        </View>
      </View>

      <View style={styles.tabGroup}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => {
            setTab('activities');
          }}>
          <Icon name="bike" size={28} color={tab === 'activities' ? Colors.primary : Colors.gray} />
          <Text style={styles.tabText}>Activites</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => {
            setTab('groups');
          }}>
          <Icon name="account-group" size={28} color={tab === 'groups' ? Colors.primary : Colors.gray} />
          <Text style={styles.tabText}>Groups</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => {
            setTab('routes');
          }}>
          <Icon name="map-marker" size={28} color={tab === 'routes' ? Colors.primary : Colors.gray} />
          <Text style={styles.tabText}>Routes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => {
            setTab('stats');
          }}>
          <Icon name="table" size={28} color={tab === 'stats' ? Colors.primary : Colors.gray} />
          <Text style={styles.tabText}>Stats</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1, height: '100%'}}>{ShowTab(tab)}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: Colors.backgroundColor,
  },
  text: {
    color: Colors.light,
    fontSize: 16,
    fontFamily: Fonts.main,
  },
  textSoft: {
    color: Colors.gray,
    fontSize: 10,
    fontFamily: Fonts.interRegular,
  },
  textUsername: {
    color: Colors.light,
    fontSize: 28,
    fontFamily: Fonts.main,
  },
  tabText: {
    color: Colors.gray,
    fontSize: 12,
    fontFamily: Fonts.main,
  },
  tabGroup: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  tabItem: {
    flex: 1,
    gap: 2,
    borderRadius: 16,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
