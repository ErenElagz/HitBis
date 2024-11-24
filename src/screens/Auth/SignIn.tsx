import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../styles/colors';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import Fonts from '../../styles/fonts';
import TextInputComponent from '../../components/InputText';
import defaultStyles from '../../styles/defaultStyles';
import OrDivider from '../../components/Ordivider';
import LinkText from '../../components/Linktext';
export default function SignIn() {

  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{width: '100%', gap: 8, marginBottom: 24, marginHorizontal: 4}}>
        <Text style={defaultStyles.HeaderText}>Login in the HitBis</Text>
        <Text style={defaultStyles.HeaderBottomText}>
          Login to your account to see your progress and routes
        </Text>
      </View>
      <View style={{width: '100%', gap: 8}}>
        <TextInputComponent placeholder="Email" value="" style={{}} />
        <TextInputComponent placeholder="Password" value="" style={{}} />
      </View>
      <LinkText
        align="right"
        title="forgot password?"
        textStyle="link"
        onPress={() => {
          nav.navigate('ForgotPassword' as never);
        }}
      />
      <Button
        type={['tertiary']}
        title="Sign In"
        onPress={() => {
          nav.navigate('ResetPassword' as never);
        }}
      />
      <OrDivider />
      <LinkText
        align="center"
        title="Create a Account? Sign Up"
        textStyle="link"
        onPress={() => {
          nav.navigate('SignUp' as never);
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
