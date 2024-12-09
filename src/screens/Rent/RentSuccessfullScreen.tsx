import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../styles/colors';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/Button';
import LinearGradient from 'react-native-linear-gradient';

export default function RentSuccessfullScreen({route}: any) {
  const nav = useNavigation();
  const {codes} = route.params;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.primary,  Colors.backgroundColor]}
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          opacity: 0.25,
        }}
      />
      <Text style={styles.text}>RentSuccessfullScreen</Text>
      <Text style={styles.text}>{codes}</Text>
      <Button
        title="Open the Lock of the Bike"
        style={{position: 'absolute', zIndex: 999, bottom: 16, alignSelf: 'center', width: '94%'}}
        onPress={() => {
          useNavigation().navigate('HomeScreen' as never);
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
  text: {
    color: Colors.primary,
    fontSize: 20,
  },
  map: {
    width: '100%',
    height: 400,
  },
});
