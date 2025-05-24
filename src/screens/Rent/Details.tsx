// React
import {View, Text, StyleSheet, Image, Modal} from 'react-native';
import React, {useEffect, useRef} from 'react';
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
// Api
import {getBikeDetails} from '../../api/bikeService';
import {rentBike} from '../../api/rentService';

export default function DetailsScreen({route}: any) {
  // Variables
  const nav = useNavigation();
  const swipeButtonRef = useRef<SwipeButton>(null);
  const {bikeId, slotCode} = route.params as {bikeId: string; slotCode: string};
  const [bikeDetails, setBikeDetails] = React.useState(null);
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [modalVisible, setModalVisible] = React.useState(false);

  useEffect(() => {
    getBikeDetails(bikeId)
      .then(response => {
        if (response.isSuccess === true) {
          setBikeDetails(response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching bike details:', error);
      });
  }, [bikeId]);

  const handleRentBike = () => {
    if (bikeDetails) {
      rentBike(slotCode)
        .then(response => {
          if (response.isSuccess === true) {
            setModalVisible(true);
          } else {
            console.error('Error renting bike:', response.message);
          }
        })
        .catch(error => {
          console.error('Error renting bike:', error);
        });
    }
  };

  const ModalComponent = () => {
    return (
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Renting Successful</Text>
            <Text style={styles.modalSubtitle}>You have successfully rented the bike</Text>
            <View style={styles.buttonGroup}>
              <Button
                type="secondary"
                icon="bike"
                title="Start the Ride"
                onPress={() => {
                  setModalVisible(false);
                  nav.navigate('Home', {screen: 'Ride'});
                }}
              />
              <Button
                type="tertiary"
                icon="home"
                title="Close to Home"
                onPress={() => {
                  setModalVisible(false);
                  nav.navigate('Home' as never);
                }}
              />
            </View>
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
              <Text style={{color: Colors.light, fontSize: 24, marginBottom: 3}}>Bike Details</Text>
              <Text style={{color: Colors.gray}}> Bike ID: {bikeDetails ? bikeDetails.bikeCode : ''}</Text>
              <Text style={{color: Colors.light, fontWeight: 'bold'}}>Description </Text>
              <Text style={{color: Colors.gray}}>{bikeDetails ? bikeDetails.description : ''}</Text>
            </View>
            <View style={{backgroundColor: Colors.backgroundColorsSecondary, alignItems: 'center', justifyContent: 'center', borderRadius: 16, padding: 8}}>
              <Image style={{width: 160, height: 120}} source={require('../../assets/images/bikeImage.png')} />
            </View>
          </View>

          <SwipeableButton onSwipeSuccess={() => handleRentBike()} />
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: '85%',
    padding: 24,
    borderRadius: 32,
    backgroundColor: Colors.backgroundColorsSecondary,
    elevation: 10, // Android için gölge
    shadowColor: '#000', // iOS için gölge
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  modalTitle: {
    color: Colors.light,
    fontSize: 24,
    marginBottom: 12,
    textAlign: 'center',
  },
  modalSubtitle: {
    color: Colors.gray,
    fontSize: 16,
    textAlign: 'center',
  },
  buttonGroup: {
    marginTop: 24,
    gap: 12,
  },
});
