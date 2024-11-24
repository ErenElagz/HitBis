import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../styles/colors';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import Fonts from '../../styles/fonts';
import TextInputComponent from '../../components/TextInput';
import defaultStyles from '../../styles/defaultStyles';
import LinkText from '../../components/Linktext';

export default function ResetPassword() {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{width: '100%', gap: 8, marginBottom: 24, marginHorizontal: 4}}>
        <Text style={defaultStyles.HeaderText}>Reset Password</Text>
        <Text style={defaultStyles.HeaderBottomText}>
          Enter Your New Password.
        </Text>
      </View>
      <View style={{width: '100%', gap: 8, marginBottom: 16}}>
        <TextInputComponent placeholder="Password" value="" style={{}} />
        <TextInputComponent placeholder="Password" value="" style={{}} />
      </View>
      <Button
        type={['tertiary']}
        title="Reset Password"
        onPress={() => {
          nav.navigate('SignIn' as never);
        }}
      />
      <LinkText
        align="center"
        title="Go Back!"
        textStyle="link"
        onPress={() => {
          nav.goBack();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    padding: 16,
  },
  text: {
    color: Colors.primary,
    fontSize: 20,
    fontFamily: Fonts.main,
  },
});
