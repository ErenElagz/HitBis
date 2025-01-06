// React
import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
// Styles
import Colors from '../../styles/Colors';
import defaultStyles from '../../styles/DefaultStyles';
import {CustomMapStyle} from '../../styles/MapStyle';

// Components
import Button from '../../components/Button';
// Libraries
import {useNavigation} from '@react-navigation/native';
import MapView, {Marker, PROVIDER_DEFAULT} from 'react-native-maps';
import StationsList from '../../data/stations';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
export default function NearMeScreen() {
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
        <MapView
          customMapStyle={CustomMapStyle}
          provider={PROVIDER_DEFAULT}
          style={{width: '100%', height: '100%'}}
          initialRegion={{
            latitude: 41.0082,
            longitude: 28.9784,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}>
        </MapView>
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
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
  },
});
