// React
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
// Styles
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// Libraries
import {useNavigation} from '@react-navigation/native';
// Components

export default function EventsScreen() {
  const nav = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => nav.goBack()}
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: 8,
          paddingLeft: 20,
          paddingBottom: 12,
        }}>
        <Icon name="arrow-left" size={24} color={Colors.light} />
        <Text
          style={{
            color: Colors.light,
            fontSize: 20,
            fontFamily: Fonts.interBold,
          }}>
          Events
        </Text>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{margin: 12, gap: 12}}>
          <View
            style={{
              height: 280,
              width: '100%',
              backgroundColor: Colors.backgroundColorsSecondary,
              borderRadius: 16,
            }}
          />
          <View
            style={{
              height: 280,
              width: '100%',
              backgroundColor: Colors.backgroundColorsSecondary,
              borderRadius: 16,
            }}
          />
          <View
            style={{
              height: 280,
              width: '100%',
              backgroundColor: Colors.backgroundColorsSecondary,
              borderRadius: 16,
            }}
          />
          <View
            style={{
              height: 280,
              width: '100%',
              backgroundColor: Colors.backgroundColorsSecondary,
              borderRadius: 16,
            }}
          />
          <View
            style={{
              height: 280,
              width: '100%',
              backgroundColor: Colors.backgroundColorsSecondary,
              borderRadius: 16,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: Colors.backgroundColor,
  },
  text: {
    color: Colors.light,
    fontSize: 24,
    fontFamily: Fonts.interBold,
    marginLeft: 20,
  },
});
