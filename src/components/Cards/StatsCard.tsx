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
      <Text style={styles.title}>My Stats</Text>
      <View style={styles.statItem}>
        <Icon name="clock-outline" size={24} color={Colors.tertiary} />
        <Text style={styles.statText}>{totalBikeTime}</Text>
      </View>
      <View style={styles.statItem}>
        <Icon name="bike" size={24} color={Colors.tertiary} />
        <Text style={styles.statText}>{totalRentals} Rent</Text>
      </View>
      <View style={styles.statItem}>
        <Icon name="fire" size={24} color={Colors.tertiary} />
        <Text style={styles.statText}>{totalCaloriesBurned} kcal</Text>
      </View>
      <View style={styles.statItem}>
        <Icon name="trophy" size={24} color={Colors.tertiary} />
        <Text style={styles.statText}>{totalActivities} Activity</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
    padding: 24,
    backgroundColor: Colors.backgroundColorsSecondary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.light,
    marginBottom: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    padding: 16,
    borderRadius: 16,
    backgroundColor: Colors.backgroundColor,
  },
  statText: {
    fontSize: 20,
    marginLeft: 12,
    color: Colors.light,
  },
});

export default StatsCard;
