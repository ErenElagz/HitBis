import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../styles/colors';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button
        title="Tıkla Beni"
        type='link'
        textStyle={['link']}
        onPress={() => {
          nav.navigate('SignIn');
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
});
