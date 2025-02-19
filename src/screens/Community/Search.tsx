import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
// Styles
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// Libraries
import {useNavigation} from '@react-navigation/native';
// Components
import SearchBar from '../../components/SearchBar';
import GroupsList from '../../data/groups'; // Grupların olduğu fake data
import PopularRoutes from '../../data/routes'; // Rotaların olduğu fake data

export default function SearchScreen() {
  const nav = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  // Arama fonksiyonu: Gruplar ve Rotaları filtrele
  const filteredGroups = GroupsList.filter(group => group.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredRoutes = PopularRoutes.filter(route => route.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <SafeAreaView style={styles.container}>
      {/* Geri Butonu */}
      <TouchableOpacity
        onPress={() => nav.goBack()}
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: 8,
        }}>
        <Icon name="arrow-left" size={24} color={Colors.light} />
        <Text
          style={{
            color: Colors.light,
            fontSize: 20,
            fontFamily: Fonts.interBold,
          }}>
          Search in Community
        </Text>
      </TouchableOpacity>

      {/* Arama Çubuğu */}
      <SearchBar placeholder="Search" onChangeText={text => setSearchQuery(text)} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 16}}>
        <View style={{gap: 12}}>
          {/* Grupları Listele */}
          <Text style={styles.sectionTitle}>📌 Gruplar</Text>
          {filteredGroups.length > 0 ? (
            filteredGroups.map(group => (
              <TouchableOpacity key={group.id} style={styles.card}>
                <Text style={styles.cardTitle}>{group.name}</Text>
                <Text style={styles.cardDescription}>{group.description}</Text>
                <Text style={styles.cardInfo}>📍 {group.location}</Text>
                <Text style={styles.cardInfo}>👥 {group.membersCount} Üye</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.noResult}>⚠️ Grup bulunamadı</Text>
          )}

          {/* Rotaları Listele */}
          <Text style={styles.sectionTitle}>🚴‍♂️ Rotalar</Text>
          {filteredRoutes.length > 0 ? (
            filteredRoutes.map(route => (
              <TouchableOpacity key={route.id} style={styles.card}>
                <Text style={styles.cardTitle}>{route.name}</Text>
                <Text style={styles.cardDescription}>{route.description}</Text>
                <Text style={styles.cardInfo}>📍 Başlangıç: {route.startingPoint}</Text>
                <Text style={styles.cardInfo}>🏁 Bitiş: {route.endingPoint}</Text>
                <Text style={styles.cardInfo}>
                  📏 {route.distance} - ⏳ {route.estimatedTime}
                </Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.noResult}>⚠️ Rota bulunamadı</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingBottom: 0,
    backgroundColor: Colors.backgroundColor,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.light,
    marginBottom: 8,
  },
  card: {
    width: '100%',
    backgroundColor: Colors.backgroundColorsSecondary,
    borderRadius: 16,
    padding: 12,
    justifyContent: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light,
  },
  cardDescription: {
    fontSize: 14,
    color: Colors.gray,
    marginVertical: 4,
  },
  cardInfo: {
    fontSize: 14,
    color: Colors.light,
  },
  noResult: {
    fontSize: 16,
    color: Colors.gray,
    textAlign: 'center',
    marginVertical: 8,
  },
});
