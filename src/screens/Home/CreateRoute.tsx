// React
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// Styles
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomMapStyle} from '../../styles/MapStyle';
// Libraries
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
// Components
import {TextInput} from 'react-native';
import Button from '../../components/Button';
import PlacesList from '../../data/places';

export default function CreateRouteScreen() {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 24,
          padding: 16,
          paddingTop: 32,
          backgroundColor: Colors.backgroundColorsSecondary,
        }}>
        <Image
          style={{width: 60, height: 60, borderRadius: 32}}
          source={require('../../assets/images/avatar.jpg')}
        />
        <View style={{flex: 1, marginLeft: 16}}>
          <Text
            style={{color: Colors.light, fontSize: 20, fontFamily: Fonts.main}}>
            Hmm, Let's Go!!
          </Text>
          <Text
            style={{
              color: Colors.gray,
              fontSize: 16,
              fontFamily: Fonts.interRegular,
            }}>
            Choose place to create a route
          </Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, padding: 16}}>
        {PlacesList.locations.map((place, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => nav.navigate('NearMe', {place})}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderRadius: 24,
                padding: 16,
                backgroundColor: Colors.backgroundColorsSecondary,
                marginTop: 16,
              }}>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    color: Colors.light,
                    fontSize: 16,
                    fontFamily: Fonts.main,
                  }}>
                  {place.name}
                </Text>
                <Text
                  style={{
                    color: Colors.gray,
                    fontSize: 12,
                    fontFamily: Fonts.interRegular,
                  }}>
                  {place.description}
                </Text>
              </View>
              <Icon name="chevron-right" size={24} color={Colors.light} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  text: {
    color: Colors.light,
    fontSize: 20,
    fontFamily: Fonts.main,
  },
  map: {
    width: '100%',
    height: 240,
  },
});
