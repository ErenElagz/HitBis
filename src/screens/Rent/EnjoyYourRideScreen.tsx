import {View, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../styles/colors';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';
import Fonts from '../../styles/fonts';
import LottieView from 'lottie-react-native';

export default function EnjoyYourRideScreen() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{height: 300, width: '100%',aspectRatio: 1}}>
        <LottieView style={{flex: 1}} source={require('../../assets/lottie/bike.json')} autoPlay loop />
      </View>

      <Button
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
    backgroundColor: '#rgb(234, 248, 248)',
  },
  text: {
    color: Colors.light,
    fontSize: 28,
    fontFamily: Fonts.main,
  },
  map: {
    width: '100%',
    height: 400,
  },
});
