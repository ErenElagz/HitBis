import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Colors from '../../styles/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import Fonts from '../../styles/fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CommunityScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{overflow: 'visible'}}>
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
          <View style={{marginTop: 16, width: '100%', gap: 8, flexDirection: 'row', overflow: 'visible'}}>
            <View style={{height: 200, width: 320, backgroundColor: Colors.tertiary, borderRadius: 16}} />
            <View style={{height: 200, width: 320, backgroundColor: Colors.secondary, borderRadius: 16}} />
            <View style={{height: 200, width: 320, backgroundColor: Colors.primary, borderRadius: 16}} />
          </View>
        </ScrollView>

        <View style={{marginTop: 24, width: '100%', gap: 8}}>
          <Text style={styles.text}>Discover</Text>
          <View style={{marginTop: 4, height: 200, width: '100%', backgroundColor: Colors.backgroundColorSecondary, borderRadius: 16}} />
        </View>
        <View style={{marginTop: 24, width: '100%', gap: 8}}>
          <Text style={styles.text}>On the way</Text>
          <View style={{marginTop: 4, height: 200, width: '100%', backgroundColor: Colors.backgroundColorSecondary, borderRadius: 16}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 20,
    backgroundColor: Colors.backgroundColor,
    overflow: 'visible',
  },
  text: {
    color: Colors.light,
    fontSize: 24,
  },
});
