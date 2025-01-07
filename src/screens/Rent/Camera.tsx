// React
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import React, {useEffect} from 'react';
// Styles
import Colors from '../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Fonts from '../../styles/Fonts';
// Libraries
import {
  Camera,
  useCameraDevice,
  useCodeScanner,
} from 'react-native-vision-camera';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
// Components

export default function CameraScreen() {
  const checkCameraPermission = async () => {
    const result = await request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA,
    );

    switch (result) {
      case RESULTS.GRANTED:
        break;
      case RESULTS.DENIED:
        Alert.alert(
          'İzin Reddedildi',
          'Kamera kullanımı için izin reddedildi.',
        );
        break;
      case RESULTS.BLOCKED:
        Alert.alert(
          'İzin Engellendi',
          'Kamera izinleri ayarlardan etkinleştirilmelidir.',
        );
        break;
      default:
        Alert.alert('Bilinmeyen Durum', 'Kamera izin durumu bilinmiyor.');
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
      {devices && (
        <Camera
          style={styles.camera}
          device={devices}
          isActive={true}
          codeScanner={codeScanner}
        />
      )}
      <TouchableOpacity
        style={{
          marginTop: 16,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          zIndex: 999,
          top: 16,
          left: 16,
          backgroundColor: Colors.dark,
          width: 48,
          height: 48,
          borderRadius: 16,
        }}>
        <Icon
          name="chevron-left"
          size={28}
          color={Colors.light}
          onPress={() => {
            nav.goBack();
          }}
        />
      </TouchableOpacity>
      <Icon
        name="crop-free"
        size={360}
        color={Colors.light}
        style={{
          position: 'absolute',
          zIndex: 999,
          alignSelf: 'center',
          opacity: 0.5,
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
