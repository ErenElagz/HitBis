// React
import {View, StyleSheet, TouchableOpacity, Alert, Platform} from 'react-native';
import React, {useEffect} from 'react';
// Styles
import Colors from '../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
// Libraries
import {Camera, useCameraDevice, useCodeScanner} from 'react-native-vision-camera';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
// Components
import BackButton from '../../components/BackButton';

export default function CameraScreen() {
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

  const nav = useNavigation();
  const devices = useCameraDevice('back');
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      nav.navigate('Details' as never, {codes: codes[0].value});
    },
  });

  return (
    <View style={styles.container}>
      {devices && <Camera style={styles.camera} device={devices} isActive={true} codeScanner={codeScanner} />}
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
