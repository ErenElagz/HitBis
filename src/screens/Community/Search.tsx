// React
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
// Styles
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// Libraries
import {useNavigation} from '@react-navigation/native';
// Components
import SearchBar from '../../components/SearchBar/SearchBar';

export default function SearchScreen() {
  const nav = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
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

      <SearchBar placeholder="Search" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 16}}>
        <View style={{gap: 12}}>
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
    padding: 16,
    paddingBottom: 0,
    backgroundColor: Colors.backgroundColor,
  },
});
