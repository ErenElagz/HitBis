// React
import {View, StyleSheet, TouchableOpacity, Alert, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
// Styles
import Colors from '../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
// Libraries
import {Camera, useCameraDevice, useCodeScanner} from 'react-native-vision-camera';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
// Components
import BackButton from '../../components/BackButton';
// API
import {getPocketByQRCode} from '../../api/rentService';

export default function CameraScreen() {
  const [hasScanned, setHasScanned] = useState(false);
  const nav = useNavigation();
  const device = useCameraDevice('back');

  const checkCameraPermission = async () => {
    const result = await request(Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA);

    switch (result) {
      case RESULTS.GRANTED:
        break;
      case RESULTS.DENIED:
        Alert.alert('Camera Permission', 'Camera permission is required to scan QR codes.');
        break;
      case RESULTS.BLOCKED:
        Alert.alert('Camera Permission', 'Camera permission is blocked. Please enable it from settings.');
        break;
      default:
        Alert.alert('Camera Permission', 'Camera permission is required to scan QR codes.');
    }
  };

  useEffect(() => {
    checkCameraPermission();
  }, []);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: async codes => {
      if (hasScanned) return;

      if (codes.length === 0) {
        Alert.alert('No Code Detected', 'Please try scanning again.');
        return;
      }

      if (codes.length > 1) {
        Alert.alert('Multiple Codes Detected', 'Please scan one code at a time.');
        return;
      }

      const scannedCode = codes[0].value;
      setHasScanned(true); // Tekrar taramayı engelle

      try {
        console.log(scannedCode);
        const response = await getPocketByQRCode(scannedCode);
        console.log(response);
        if (response.bikeId) {
          nav.navigate('Details' as never, {bikeId: response.bikeId, pocketId: response.pocketId, slotCode: response.slotCode} as never);
        } else {
          Alert.alert('Error', 'Failed to retrieve pocket information. Please try again.');
          setHasScanned(false);
        }
      } catch (error) {
        console.error('Error fetching pocket by QR code:', error);
        Alert.alert('Error', 'An error occurred while processing the QR code. Please try again.');
        setHasScanned(false);
      }
    },
  });

  return (
    <View style={styles.container}>
      {device && !hasScanned && <Camera style={styles.camera} device={device} isActive={true} codeScanner={codeScanner} />}
      <BackButton />
      <Icon
        name="crop-free"
        size={360}
        color={Colors.light}
        style={{
          position: 'absolute',
          zIndex: 999,
          alignSelf: 'center',
          opacity: 0.8,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
  },
  camera: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
