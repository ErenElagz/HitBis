// React
import {View, Text, StyleSheet, Image, Modal} from 'react-native';
import React, {useRef} from 'react';
// Styles
import Colors from '../../../styles/Colors';
import Fonts from '../../../styles/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomMapStyle} from '../../../styles/MapStyle';
// Libraries
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
// Components
import SwipeButton from 'rn-swipe-button';
import Header from '../../../components/Header';
import Button from '../../../components/Button';

export default function DetailsScreen({route}: any) {
  // Variables
  const nav = useNavigation();
  const {codes} = route.params;
  const swipeButtonRef = useRef<SwipeButton>(null);

  const [modalVisible, setModalVisible] = React.useState(false);
  const ModalComponent = () => {
    return (
      <Modal visible={modalVisible} transparent={false} animationType="slide">
        <View style={{flex: 1, backgroundColor: Colors.backgroundColor, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{padding: 24, borderRadius: 32, backgroundColor: Colors.backgroundColorsSecondary, borderColor: Colors.borderColor, borderWidth: 1}}>
            <Text style={{color: Colors.light, fontSize: 24, marginBottom: 12}}>Renting Succesfull</Text>
            <Text style={{color: Colors.gray, fontSize: 16}}>You have succesfully rented the bike</Text>
            <View
              style={{
                justifyContent: 'space-between',
                marginTop: 24,
                gap: 8,
              }}>
              <Button type='secondary' icon='bike' title="Start the Ride" onPress={() => nav.navigate('Home' as never, {screen: 'Ride'})} />
              <Button type='tertiary' icon='home' title="Close the Home " onPress={() => nav.navigate('Home' as never)} />
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  // JSX

  return (
    <View style={styles.container}>
      <Header title="Lets Rent" description="Swipe and Unlock your bike" onPress={() => nav.goBack()} />
      <View
        style={{
          margin: 12,
          borderRadius: 16,
          overflow: 'hidden',
          flex: 1,
        }}>
        <MapView
          customMapStyle={CustomMapStyle}
          style={styles.map}
          showsTraffic={true}
          showsUserLocation={true}
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
      </View>
      <ModalComponent />
      <View style={{padding: 12}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: 20,
            padding: 16,
            backgroundColor: Colors.backgroundColor,
            borderColor: Colors.borderColor,
            borderWidth: 1,
          }}>
          <View>
            <Text style={{color: Colors.light, fontSize: 24, marginBottom: 8}}>Bike Details</Text>
            <Text style={{color: Colors.gray, fontSize: 16}}>- Bike Code:{codes}</Text>
            <Text style={{color: Colors.gray, fontSize: 16}}>- Max Mph 50mph</Text>
            <Text style={{color: Colors.gray, fontSize: 16}}>- 8 Vitesli</Text>
            <Text style={{color: Colors.gray, fontSize: 16}}>- 21 Inch Wheels</Text>
          </View>
          <View style={{backgroundColor: Colors.backgroundColorsSecondary, alignItems: 'center', justifyContent: 'center', borderRadius: 16, padding: 8}}>
            <Image style={{width: 120, height: 120}} source={require('../../assets/images/bikeImage.png')} />
          </View>
        </View>
        <SwipeButton
          ref={swipeButtonRef}
          onSwipeSuccess={() => {
            setModalVisible(true);
            setTimeout(() => {
              swipeButtonRef.current?.reset();
            }, 1000);
          }}
          containerStyles={{borderRadius: 16}}
          height={66}
          railBackgroundColor={Colors.backgroundColorsSecondary}
          thumbIconBackgroundColor={Colors.primary}
          thumbIconStyles={{borderRadius: 16, backgroundColor: Colors.dark}}
          thumbIconWidth={60}
          swipeSuccessThreshold={90}
          railBorderColor={Colors.borderColor}
          railStyles={{borderRadius: 16}}
          thumbIconBorderColor="transparent"
          thumbIconComponent={() => <Icon name="lock-open" size={32} color={Colors.light} />}
          railFillBackgroundColor="#45BD8950"
          railFillBorderColor={Colors.primary}
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
    fontSize: 32,
    fontFamily: Fonts.interMedium,
    alignSelf: 'center',
  },
  map: {
    height: '100%',
    width: '100%',
  },
});
