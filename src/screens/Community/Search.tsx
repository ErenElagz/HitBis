// React
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
// Styles
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// Libraries
import {useNavigation} from '@react-navigation/native';
import InputText from '../../components/InputText';
// Components

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
          Search in Community
        </Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 16,
          backgroundColor: Colors.backgroundColorsSecondary,
          paddingHorizontal: 16,
          paddingVertical: 12,
          borderRadius: 16,
          gap: 4,
          marginHorizontal: 16,
          alignSelf: 'center',
        }}>
        <TouchableOpacity>
          <Icon name="magnify" size={28} color={Colors.light} />
        </TouchableOpacity>
        <TextInput
          style={{
            flex: 1,
            color: Colors.light,
            fontSize: 16,
            fontFamily: 'Roboto-Regular',
          }}
          placeholderTextColor={Colors.light}
          placeholder="Search"
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.text}>Recent Searches</Text>
        </View>
        <View style={{margin: 16, gap: 12}}>
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
