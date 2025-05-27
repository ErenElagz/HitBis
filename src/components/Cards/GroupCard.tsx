import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../styles/Colors';
import {getCityById, getCountryById} from '../../api/locationService';
import {getGroupUserCount} from '../../api/groupService';

interface GroupCardProps {
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  cityId?: string;
  countryId?: string;
  style?: object;
  imageUrl: string;
}

const GroupCard: React.FC<GroupCardProps> = ({_id, name, description, cityId, countryId, createdAt, imageUrl, style}) => {
  const nav = useNavigation();
  const [location, setLocation] = useState<string>('Konum bilgisi yok');
  const [userCount, setUserCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!cityId || !countryId || !_id) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const [cityResponse, countryResponse, countResponse] = await Promise.all([getCityById(cityId), getCountryById(countryId), getGroupUserCount(_id)]);

        if (cityResponse?.name && countryResponse?.name) {
          setLocation(`${cityResponse.name}, ${countryResponse.name}`);
        } else {
          setLocation('Konum bilgisi bulunamadı');
        }

        setUserCount(countResponse || 0);
      } catch (err) {
        console.error('Veri çekme hatası:', err);
        setError('Veriler yüklenirken hata oluştu');
        setLocation('Konum bilgisi yüklenemedi');
        setUserCount(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [cityId, countryId, _id]);

  const handlePress = () => {
    if (isLoading) return;

    nav.navigate('GroupDetail', {
      group: {
        _id,
        name,
        description,
        membersCount: userCount,
        createdAt,
        location,
        imageUrl,
      },
    });
  };

  if (isLoading) {
    return (
      <View style={[styles.card, styles.loadingContainer, style]}>
        <ActivityIndicator size="large" color={Colors.primary} />
        <Text style={styles.loadingText}>Yükleniyor...</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity style={[styles.card, style]} onPress={handlePress} activeOpacity={0.8} disabled={isLoading}>
      <Image source={{uri: imageUrl}} style={styles.image} resizeMode="cover" />

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {name}
        </Text>

        <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
          {description || 'Açıklama yok'}
        </Text>

        <View style={styles.details}>
          <Text style={styles.detailText} numberOfLines={1}>
            📍 {location}
          </Text>
          <Text style={styles.detailText}>👥 Üye: {userCount}</Text>
        </View>

        {error && <Text style={styles.errorText}>⚠️ {error}</Text>}
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
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: Colors.grayLight,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: Colors.light,
    opacity: 0.9,
    lineHeight: 20,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  detailText: {
    fontSize: 13,
    color: Colors.light,
    opacity: 0.8,
    maxWidth: '48%',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
  },
  loadingText: {
    marginTop: 10,
    color: Colors.light,
  },
  errorText: {
    fontSize: 12,
    color: Colors.error,
    marginTop: 8,
  },
});

export default GroupCard;
