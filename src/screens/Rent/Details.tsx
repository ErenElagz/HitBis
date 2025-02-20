// React
import {View, Text, StyleSheet, Image, Modal} from 'react-native';
import React, {useRef} from 'react';
// Styles
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomMapStyle} from '../../styles/MapStyle';
// Libraries
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
// Components
import SwipeableButton from '../../components/SwipeButton';
import SwipeButton from 'rn-swipe-button';
import Button from '../../components/Button';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

export default function DetailsScreen({route}: any) {
  // Variables
  const nav = useNavigation();
  const {codes} = route.params;
  const swipeButtonRef = useRef<SwipeButton>(null);
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [modalVisible, setModalVisible] = React.useState(false);
  const ModalComponent = () => {
    return (
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={{padding: 24, borderRadius: 32, backgroundColor: Colors.backgroundColorsSecondary, alignSelf: 'center', marginTop: 'auto', marginBottom: 'auto'}}>
          <Text style={{color: Colors.light, fontSize: 24, marginBottom: 12}}>Renting Succesfull</Text>
          <Text style={{color: Colors.gray, fontSize: 16}}>You have succesfully rented the bike</Text>
          <View
            style={{
              justifyContent: 'space-between',
              marginTop: 24,
              gap: 8,
            }}>
            <Button type="secondary" icon="bike" title="Start the Ride" onPress={() => nav.navigate('Home', {screen: 'Ride'})} />
            <Button type="tertiary" icon="home" title="Close the Home " onPress={() => nav.navigate('Home' as never)} />
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
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
      <ModalComponent />

      <BottomSheet
        backgroundStyle={{
          backgroundColor: Colors.backgroundColor,
        }}
        ref={bottomSheetRef}
        handleIndicatorStyle={{backgroundColor: Colors.light}}
        snapPoints={['30%']}>
        <BottomSheetView style={styles.contentContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderRadius: 20,
              padding: 4,
              borderWidth: 1,
              backgroundColor: Colors.backgroundColor,
              borderColor: Colors.borderColor,
              marginBottom: 8,
            }}>
            <View style={{flex: 1, padding: 16}}>
              <Text style={{color: Colors.light, fontSize: 24, marginBottom: 8}}>Bike Details</Text>
              <Text style={{color: Colors.gray}}>- Bike Code:{codes}</Text>
              <Text style={{color: Colors.gray}}>- Max Mph 50mph</Text>
              <Text style={{color: Colors.gray}}>- 8 Vitesli</Text>
              <Text style={{color: Colors.gray}}>- 21 Inch Wheels</Text>
            </View>
            <View style={{backgroundColor: Colors.backgroundColorsSecondary, alignItems: 'center', justifyContent: 'center', borderRadius: 16, padding: 8}}>
              <Image style={{width: 160, height: 120}} source={require('../../assets/images/bikeImage.png')} />
            </View>
          </View>
          <SwipeableButton
            ref={swipeButtonRef}
            onSwipeSuccess={() => {
              setModalVisible(true);
            }}
          />
        </BottomSheetView>
      </BottomSheet>
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
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    paddingHorizontal: 16,
  },
});
