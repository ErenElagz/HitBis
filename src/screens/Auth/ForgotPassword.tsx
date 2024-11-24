import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../styles/colors';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import Fonts from '../../styles/fonts';
import TextInputComponent from '../../components/InputText';
import defaultStyles from '../../styles/defaultStyles';
import LinkText from '../../components/Linktext';

export default function ForgotPassword() {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{width: '100%', gap: 8, marginBottom: 24, marginHorizontal: 4}}>
        <Text style={defaultStyles.HeaderText}>Forgot Password</Text>
        <Text style={defaultStyles.HeaderBottomText}>
          Enter your email to get your verification link to reset password
        </Text>
      </View>
      <View style={{width: '100%', gap: 8, marginBottom: 16}}>
        <TextInputComponent placeholder="E-mail" value="" style={{}} />
      </View>
      <Button
        type={['tertiary']}
        title="Get Code"
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
