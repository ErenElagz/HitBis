import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../../styles/colors';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';
import Fonts from '../../styles/fonts';
import LottieView from 'lottie-react-native';

export default function EnjoyYourRideScreen({route}: any) {
  const nav = useNavigation();
  const {codes} = route.params;

  return (
    <View style={styles.container}>
      <LottieView source={require('../../assets/lottie/bike.json')} autoPlay loop />

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
