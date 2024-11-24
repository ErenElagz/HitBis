import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
// Styles
import defaultStyles from '../../styles/defaultStyles';
import Fonts from '../../styles/fonts';
import Colors from '../../styles/colors';
import Button from '../../components/Button';
// Components
import InputText from '../../components/InputText';
import LinkText from '../../components/Linktext';
import OrDivider from '../../components/OrDivider';

export default function SignIn() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{width: '100%', gap: 8, marginTop: 48, marginBottom: 24}}>
        <Text style={defaultStyles.HeaderText}>Login in the HitBis</Text>
        <Text style={defaultStyles.HeaderBottomText}>
          Login to your account to see your progress and routes
        </Text>
      </View>

      <View style={{width: '100%', gap: 8}}>
        <InputText placeholder="Email" />
        <InputText placeholder="Password" />
      </View>

      <LinkText
        align="right"
        title="forgot password?"
        onPress={() => {
          nav.navigate('ForgotPassword' as never);
        }}
      />

      <Button
        type="secondary"
        title="Sign In"
        onPress={() => {
          nav.navigate('ResetPassword' as never);
        }}
      />

      <OrDivider />

      <LinkText
        align="center"
        title="Create a Account? Sign Up"
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
});
