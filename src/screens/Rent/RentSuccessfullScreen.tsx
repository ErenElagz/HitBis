import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Colors from '../../styles/colors';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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

      <View style={{flexDirection: 'row', justifyContent: 'space-between', borderRadius: 20, padding: 16, marginTop: 12, backgroundColor: Colors.backgroundColorSecondary}}>
        <View>
          <Text style={{color: Colors.light, fontSize: 24,marginBottom:8}}>Bike Details</Text>
          <Text style={{color: Colors.gray, fontSize: 16}}>- Max Mph 50mph</Text>
          <Text style={{color: Colors.gray, fontSize: 16}}>- 8 Vitesli</Text>
          <Text style={{color: Colors.gray, fontSize: 16}}>- 21 Inch Wheels</Text>
        </View>
        <View style={{backgroundColor: "#45BD8950", alignItems: 'center', justifyContent: 'center', borderRadius: 16,padding:8}}>
          <Image style={{width: 160, height: 160}} source={require('../../assets/image/bikeImage.png')} />
        </View>
      </View>
      <View style={{padding: 12}}>
        <Text style={styles.text2}>Bike Code: {codes}</Text>
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
          titleFontSize={18}
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
    fontSize: 32,
    fontFamily: Fonts.main,
  },
  text2: {
    color: Colors.gray,
    fontSize: 20,
    fontFamily: Fonts.interMedium,
    letterSpacing: -1,
  },
  map: {
    width: '100%',
    height: 400,
  },
});
