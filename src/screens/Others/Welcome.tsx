// React
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
// Styles
import Colors from '../../styles/Colors';
import defaultStyles from '../../styles/DefaultStyles';
// Components
import Button from '../../components/Button';
// Libraries
import {useNavigation} from '@react-navigation/native';

export default function WelcomeScreen() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: 360,
          backgroundColor: Colors.backgroundColor,
          marginBottom: 16,
          borderRadius: 16,
        }}></View>
      <View style={{gap: 12, padding: 8}}>
        <Text style={defaultStyles.HeaderText}>Welcome to HitBis </Text>
        <Text style={defaultStyles.HeaderBottomText}>
          Rent a Bike. Drive with Others. Create a Route and Events. Share with
          Others. Enjoy Your Ride
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          marginBottom: 16,
          alignSelf: 'center',
        }}>
        <Button
          type="secondary"
          title="Get Started"
          onPress={() => {
            nav.navigate('SignIn' as never);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.backgroundColor,
  },
});
