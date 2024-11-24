import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../styles/colors';
import defaultStyles from '../../styles/defaultStyles';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
export default function WelcomeScreen() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: 360,
          backgroundColor: Colors.backgroundColorSecondary,
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
          alignItems: 'center',
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
    paddingTop: 36,
    backgroundColor: Colors.backgroundColor,
  },
});
