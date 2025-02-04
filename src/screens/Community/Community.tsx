// React
import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
// Styles
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// Libraries
import {useNavigation} from '@react-navigation/native';
// Components
import Button from '../../components/Button';

export default function CommunityScreen() {
  const nav = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 8,
          }}>
          <Text
            style={{
              fontSize: 32,
              fontFamily: Fonts.interBold,
              color: Colors.light,
            }}>
            Community
          </Text>
          <Icon name="magnify" size={32} color={Colors.light} onPress={() => nav.navigate('Search' as never)} />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{marginTop: 16, gap: 8, flexDirection: 'row'}}>
            <View
              style={{
                height: 200,
                width: 320,
                backgroundColor: Colors.backgroundColorsSecondary,
                borderRadius: 16,
              }}
            />
            <View
              style={{
                height: 200,
                width: 320,
                backgroundColor: Colors.backgroundColorsSecondary,
                borderRadius: 16,
              }}
            />
            <View
              style={{
                height: 200,
                width: 320,
                backgroundColor: Colors.backgroundColorsSecondary,
                borderRadius: 16,
              }}
            />
          </View>
        </ScrollView>

        <View style={{marginTop: 24, width: '100%', gap: 8}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.text}>Last Events</Text>
            <TouchableOpacity onPress={() => nav.navigate('Events' as never)}>
              <Text
                style={{
                  color: Colors.gray,
                  fontSize: 16,
                  fontFamily: Fonts.interRegular,
                  textDecorationLine: 'underline',
                }}>
                See all
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 4,
              height: 200,
              width: '100%',
              backgroundColor: Colors.backgroundColorsSecondary,
              borderRadius: 16,
            }}
          />
        </View>
        <View style={{marginTop: 24, width: '100%', gap: 8}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.text}>Popular Groups</Text>
            <TouchableOpacity onPress={() => nav.navigate('Groups' as never)}>
              <Text
                style={{
                  color: Colors.gray,
                  fontSize: 16,
                  fontFamily: Fonts.interRegular,
                  textDecorationLine: 'underline',
                }}>
                See all
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 4,
              height: 200,
              width: '100%',
              backgroundColor: Colors.backgroundColorsSecondary,
              borderRadius: 16,
            }}
          />
        </View>

        <View style={{marginTop: 24, gap: 8}}>
          <Text style={styles.text}>On the way</Text>
          <View
            style={{
              height: 200,
              width: '100%',
              backgroundColor: Colors.backgroundColorsSecondary,
              borderRadius: 16,
            }}
          />
        </View>
      </ScrollView>
      <View
        style={{
          marginTop: 12,
          gap: 8,
          flexDirection: 'row',
        }}>
        <Button title="Create a Event" type="tertiary" icon="plus" onPress={() => nav.navigate('CreateEvent' as never)} style={{flex: 1}} />
        <Button title="Create a Group" type="tertiary" icon="account-group" onPress={() => nav.navigate('CreateGroup' as never)} style={{flex: 1}} />
      </View>
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
