import React from 'react';
import {View, Text, StyleSheet, useColorScheme, TouchableOpacity, Image} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Colors from '../../styles/Colors';
import {useNavigation} from '@react-navigation/native';

// GroupType'ı tekrar tanımlamak istemiyorsanız, orijinal türü buraya taşıyın
type CategoryType = 'Bisiklet' | 'Koşu' | 'Yoga' | 'Doğa Yürüyüşü' | 'Fitness';

interface GroupCardProps {
  id: string;
  name: string;
  description: string;
  membersCount: number;
  createdAt: string;
  category: CategoryType; // Düzeltildi
  location: string;
  style?: object;
  image: string;
}

const GroupCard: React.FC<GroupCardProps> = ({
  id,
  name,
  description,
  membersCount,
  createdAt,
  category,
  location,
  image, // Eksik prop eklendi
  style,
}) => {
  const nav = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.card, style]}
      onPress={() => {
        try {
          nav.navigate('Group', {
            id, // ID'yi ekledik
            name,
            description,
            membersCount,
            createdAt,
            category,
            location,
            image,
          });
        } catch (e) {
          console.error('Failed to navigate to Group:', e);
        }
      }}>
      {/* Görsel ekleme */}
      <Image source={{uri: image}} style={styles.image} resizeMode="cover" />

      {/* Grup Detayları */}
      <View style={styles.content}>
        <Text style={[styles.title]}>{name}</Text>
        <Text style={[styles.description]}>{description}</Text>

        <View style={styles.details}>
          <Text style={styles.detailText}>📍 Konum: {location}</Text>
          <Text style={styles.detailText}>👥 Üye Sayısı: {membersCount}</Text>
          <Text style={styles.detailText}>📅 Kuruluş Tarihi: {createdAt}</Text>
          <Text style={styles.detailText}>🏆 Kategori: {category}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 16,
    width: 300,
    backgroundColor: Colors.backgroundColorsSecondary,
  },
  image: {
    width: '100%',
    height: 150,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light,
  },
  description: {
    fontSize: 14,
    marginTop: 8,
    color: Colors.light,
  },
  details: {
    marginTop: 8,
  },
  detailText: {
    fontSize: 14,
    marginTop: 4,
    color: Colors.light,
  },
});

export default GroupCard;
