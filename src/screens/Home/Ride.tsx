// React
import React,{useRef,useCallback} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
// Styles
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomMapStyle} from '../../styles/MapStyle';
// Libraries
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
// Components
import Button from '../../components/Button';
import PlacesList from '../../data/places';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

export default function RideScreen() {
  const nav = useNavigation();
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  return (
    <View style={styles.container}>
      <GestureHandlerRootView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 32,
            padding: 16,
            borderRadius: 32,
            zIndex: 1,
            backgroundColor: Colors.backgroundColorsSecondary,
          }}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <Image
              style={{width: 48, height: 48, borderRadius: 32}}
              source={require('../../assets/images/avatar.jpg')}
            />
            <View style={{flex: 1, marginLeft: 16}}>
              <Text
                style={{
                  color: Colors.light,
                  fontSize: 20,
                  fontFamily: Fonts.main,
                }}>
                Start a ride together
              </Text>
              <Text
                style={{
                  color: Colors.gray,
                  fontSize: 14,
                  fontFamily: Fonts.interRegular,
                }}>
                Let's go together
              </Text>
            </View>
          </View>
        </View>
        <MapView
          customMapStyle={CustomMapStyle}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 41.0082,
            longitude: 28.9784,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}></MapView>
        <BottomSheet
          backgroundStyle={{
            backgroundColor: Colors.backgroundColor,
          }}
          backdropComponent={null}
          ref={bottomSheetRef}
          onChange={handleSheetChanges}
          snapPoints={['25%', '50%', '90%']} // Yükseklik seviyeleri
        >
          <BottomSheetView style={styles.contentContainer}>
            <Text>Near Me</Text>
            <Button
              title="Back"
              onPress={() => nav.goBack()}
              style={{marginTop: 24}}
            />
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
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
    height: '100%',
    marginTop: -32,
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
  },
});
