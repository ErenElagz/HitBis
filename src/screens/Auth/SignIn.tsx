import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../styles/colors';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
export default function SignIn() {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign In</Text>
      <Button
        title="Tıkla Beni"
        onPress={() => {
          nav.navigate('SignUp');
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
