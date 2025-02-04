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

function ActivitiesTab() {
  return (
    <View
      style={{
        marginTop: 4,
        height: 200,
        width: '100%',
        backgroundColor: Colors.backgroundColorsSecondary,
        borderRadius: 16,
      }}>
      <Text style={styles.tabText}>ActivitiesTab</Text>
    </View>
  );
}

function GroupsTab() {
  return (
    <View
      style={{
        marginTop: 4,
        height: 200,
        width: '100%',
        backgroundColor: Colors.backgroundColorsSecondary,
        borderRadius: 16,
      }}>
      <Text style={styles.tabText}>GroupsTab</Text>
    </View>
  );
}

function RoutesTab() {
  return (
    <View
      style={{
        marginTop: 4,
        height: 200,
        width: '100%',
        backgroundColor: Colors.backgroundColorsSecondary,
        borderRadius: 16,
      }}>
      <Text style={styles.tabText}>RoutesTab</Text>
    </View>
  );
}

function StatsTab() {
  return (
    <View
      style={{
        marginTop: 4,
        height: '100%',
        width: '100%',
        backgroundColor: Colors.backgroundColorsSecondary,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={styles.tabText}>StatsTab</Text>
    </View>
  );
}

export default function ProfileScreen() {
  const nav = useNavigation();

  const [tab, setTab] = React.useState('activities');
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            borderRadius: 16,
            paddingVertical: 16,
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              gap: 8,
              flex: 1,
            }}>
            <Image source={require('../../assets/images/avatar.jpg')} style={{width: 80, height: 80, borderRadius: 999}} />
            <Text style={styles.textUsername}>ErenElagz</Text>
          </View>
          <View
            style={{
              marginTop: 12,
              gap: 8,
              flexDirection: 'row',
            }}>
            <Button
              icon="account-outline"
              type="tertiary"
              title="Edit"
              style={{flex: 1}}
              onPress={() => {
                nav.navigate('EditProfile' as never);
              }}
            />
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
              title="Updates"
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
            onPress={() => {
              setTab('activities');
            }}>
            <Icon name="bike" size={28} color={tab === 'activities' ? Colors.primary : Colors.gray} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setTab('groups');
            }}>
            <Icon name="account-group" size={28} color={tab === 'groups' ? Colors.primary : Colors.gray} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setTab('routes');
            }}>
            <Icon name="map-marker" size={28} color={tab === 'routes' ? Colors.primary : Colors.gray} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setTab('stats');
            }}>
            <Icon name="table" size={28} color={tab === 'stats' ? Colors.primary : Colors.gray} />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 16}}>{ShowTab(tab)}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
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
    color: Colors.light,
    fontSize: 28,
    fontFamily: Fonts.main,
  },
  tabGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
});
