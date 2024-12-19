import {View, StyleSheet, Image, Dimensions, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../../styles/colors';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';
import Fonts from '../../styles/fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function EnjoyYourRideScreen() {
  const nav = useNavigation();
  const {width} = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          nav.navigate('RentCycleScreen' as never);
        }}
        style={{
          marginTop: 16,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          zIndex: 999,
          top: 16,
          left: 16,
          backgroundColor: Colors.dark,
          width: 48,
          height: 48,
          borderRadius: 16,
        }}>
        <Icon name="chevron-left" size={28} color={Colors.light} />
      </TouchableOpacity>
      <Text style={styles.text}>Enjoy 🚲 Your Ride!</Text>
      <Image style={{width: width + 80, height: width + 80, alignSelf: 'center'}} source={require('../../assets/image/ride.jpg')} />

      <Button
        style={{position: 'absolute', bottom: 20, width: '100%', alignSelf: 'center'}}
        title="Go Home"
        onPress={() => {
          nav.navigate('Home' as never);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    paddingBottom: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 24,
    left: 16,
    backgroundColor: Colors.backgroundColor,
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  text: {
    color: Colors.dark,
    fontSize: 60,
    fontFamily: Fonts.interExtraBold,
    letterSpacing: -2 },
  map: {
    width: '100%',
    height: 400,
  },
});
