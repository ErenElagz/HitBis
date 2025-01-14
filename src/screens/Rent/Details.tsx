// React
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
// Styles
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomMapStyle} from '../../styles/MapStyle';
// Libraries
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
// Components
import SwipeButton from 'rn-swipe-button';

export default function DetailsScreen({route}: any) {
  // Variables
  const nav = useNavigation();
  const {codes} = route.params;

  return (
    <View style={styles.container}>
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
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}>
          <Marker
            coordinate={{
              latitude: 41.0082,
              longitude: 28.9784,
            }}
            title="Bike Location"
            description="This is the location of your bike"
          />
        </MapView>
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
      <View style={{padding: 12}}>
        <Text style={styles.text2}>Bike Code: {codes}</Text>
      </View>

      <View style={{position: 'absolute', bottom: 16, alignSelf: 'center', width: '100%'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', borderRadius: 20, padding: 16, backgroundColor: Colors.backgroundColor, borderColor : Colors.borderColor, borderWidth: 1}}>
          <View>
            <Text style={{color: Colors.light, fontSize: 24, marginBottom: 8}}>Bike Details</Text>
            <Text style={{color: Colors.gray, fontSize: 16}}>- Max Mph 50mph</Text>
            <Text style={{color: Colors.gray, fontSize: 16}}>- 8 Vitesli</Text>
            <Text style={{color: Colors.gray, fontSize: 16}}>- 21 Inch Wheels</Text>
          </View>
          <View style={{backgroundColor: Colors.backgroundColorsSecondary, alignItems: 'center', justifyContent: 'center', borderRadius: 16,padding:8}}>
            <Image style={{width: 120, height: 120}} source={require('../../assets/images/bikeImage.png')} />
          </View>
        </View>
        <SwipeButton
          onSwipeSuccess={() => {
            nav.navigate('Successful' as never);
          }}
          containerStyles={{borderRadius: 16}}
          height={60}
          railBackgroundColor={Colors.backgroundColorsSecondary}
          thumbIconBackgroundColor={Colors.primary}
          thumbIconStyles={{borderRadius: 16, backgroundColor: Colors.secondaryDark}}
          thumbIconWidth={60}
          railBorderColor={Colors.borderColor}
          railStyles={{borderRadius: 16}}
          thumbIconBorderColor="transparent"
          thumbIconComponent={() => <Icon name="lock-open" size={32} color={Colors.light} />}
          railFillBackgroundColor={Colors.secondaryDark}
          titleColor="#fff"
          titleFontSize={18}
          title="Slide and Unlock"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
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
