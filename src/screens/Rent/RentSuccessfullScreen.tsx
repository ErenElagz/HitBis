import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../../styles/colors';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/Button';
import LinearGradient from 'react-native-linear-gradient';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {CustomMapStyle} from '../../utils/mapStyle';
import Fonts from '../../styles/fonts';
import {SafeAreaView} from 'react-native-safe-area-context';
import SwipeButton from 'rn-swipe-button';

export default function RentSuccessfullScreen({route}: any) {
  const nav = useNavigation();
  const {codes} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          borderRadius: 16,
          overflow: 'hidden',
        }}>
        <MapView
          customMapStyle={CustomMapStyle}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 41.0082,
            longitude: 28.9784,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}></MapView>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            marginTop: 16,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            zIndex: 999,
            bottom: 16,
            right: 16,
            backgroundColor: Colors.dark,
            width: 48,
            height: 48,
            borderRadius: 16,
          }}>
          <Icon name="crop-free" size={28} color={Colors.light} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 16,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            zIndex: 999,
            bottom: 72,
            right: 20,
            backgroundColor: Colors.secondaryDark,
            width: 36,
            height: 36,
            borderRadius: 20,
          }}>
          <Icon name="near-me" size={20} color={Colors.red} />
        </TouchableOpacity>
      </View>
      <View style={{padding: 16}}>
        <Text style={styles.text}>Open the Bicycle and Enjoy Your Ride</Text>
        <Text style={styles.text2}>{codes}</Text>
      </View>
      <View style={{position: 'absolute', zIndex: 999, bottom: 16, alignSelf: 'center', width: '100%'}}>
        <SwipeButton
          onSwipeSuccess={() => {
            nav.navigate('EnjoyYourRideScreen' as never);
          }}
          containerStyles={{borderRadius: 16}}
          height={60}
          railBackgroundColor={Colors.backgroundColorSecondary}
          thumbIconBackgroundColor={Colors.primary}
          thumbIconStyles={{borderRadius: 16, backgroundColor: Colors.secondaryDark}}
          thumbIconWidth={60}
          thumbIconHeight={20}
          railBorderColor="transparent"
          thumbIconBorderColor="transparent"
          thumbIconComponent={() => <Icon name="lock-open" size={32} color={Colors.light} />}
          railFillBackgroundColor={Colors.secondaryDark}
          titleColor="#fff"
          titleFontSize={16}
          title="Slide and Unlock"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    paddingBottom: 20,
    backgroundColor: Colors.backgroundColor,
  },
  text: {
    color: Colors.light,
    fontSize: 28,
    fontFamily: Fonts.main,
  },
  text2: {
    color: Colors.gray,
    fontSize: 28,
    fontFamily: Fonts.main,
  },
  map: {
    width: '100%',
    height: 400,
  },
});
