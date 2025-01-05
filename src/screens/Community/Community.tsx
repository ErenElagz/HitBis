// React
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
// Styles
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// Libraries
// Components

export default function CommunityScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center', 
          }}>
          <Text style={{fontSize: 36, fontFamily: Fonts.interBold, color: Colors.light, letterSpacing: -1.5}}>Community</Text>
          <Icon name="magnify" size={32} color={Colors.light} />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{marginTop: 16, gap: 8, flexDirection: 'row'}}>
            <View style={{height: 200, width: 320, backgroundColor: Colors.backgroundColorsSecondary, borderRadius: 16}} />
            <View style={{height: 200, width: 320, backgroundColor: Colors.backgroundColorsSecondary, borderRadius: 16}} />
            <View style={{height: 200, width: 320, backgroundColor: Colors.backgroundColorsSecondary, borderRadius: 16}} />
          </View>
        </ScrollView>

        <View style={{marginTop: 24, gap: 8}}>
          <Text style={styles.text}>Discover</Text>
          <View style={{height: 200, width: '100%', backgroundColor: Colors.backgroundColorsSecondary, borderRadius: 16}} />
        </View>
        
        <View style={{marginTop: 24, gap: 8}}>
          <Text style={styles.text}>On the way</Text>
          <View style={{height: 200, width: '100%', backgroundColor: Colors.backgroundColorsSecondary, borderRadius: 16}} />
        </View>

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
    fontSize: 24,
  },
});
