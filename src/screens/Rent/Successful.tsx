// React
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
// Styles
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// Libraries
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';
// Components

export default function SuccessfullScreen({navigation}: any) {
  // Variables
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        title="Start the Ride Mode"
        icon="bicycle"
        type="secondary"
        style={{position: 'absolute', bottom: 16, left: 16, right: 16}}
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Ride', // RideNavigator içindeki ekran ismi
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  text: {
    color: Colors.light,
    fontSize: 32,
    fontFamily: Fonts.main,
  },
});
