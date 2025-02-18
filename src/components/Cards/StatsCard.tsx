import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface StatsCardProps {
  totalBikeTime: string;
  totalRentals: number;
  totalCaloriesBurned: number;
  totalActivities: number;
}

const StatsCard: React.FC<StatsCardProps> = ({totalBikeTime, totalRentals, totalCaloriesBurned, totalActivities}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>İstatistiklerim</Text>
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Icon name="clock-outline" size={24} color={Colors.tertiary} />
          <Text style={styles.statText}>{totalBikeTime}</Text>
        </View>
        <View style={styles.statItem}>
          <Icon name="bike" size={24} color={Colors.tertiary} />
          <Text style={styles.statText}>{totalRentals} Kiralama</Text>
        </View>
        <View style={styles.statItem}>
          <Icon name="fire" size={24} color={Colors.tertiary} />
          <Text style={styles.statText}>{totalCaloriesBurned} kcal</Text>
        </View>
        <View style={styles.statItem}>
          <Icon name="trophy" size={24} color={Colors.tertiary} />
          <Text style={styles.statText}>{totalActivities} Aktivite</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    padding: 24,
    backgroundColor: Colors.backgroundColorsSecondary,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 16,
    textAlign: 'center',
  },
  statsContainer: {
    marginTop: 8,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  statText: {
    fontSize: 24,
    marginLeft: 12,
    color: Colors.light,
    fontWeight: '500',
  },
  button: {
    backgroundColor: Colors.light,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
  },
});

export default StatsCard;
