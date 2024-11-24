import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../styles/colors';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import Fonts from '../../styles/fonts';
import TextInputComponent from '../../components/TextInput';
import defaultStyles from '../../styles/defaultStyles';
import OrDivider from '../../components/Ordivider';
import LinkText from '../../components/Linktext';
export default function SignUp() {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{width: '100%', gap: 8, marginBottom: 24, marginHorizontal: 4}}>
        <Text style={defaultStyles.HeaderText}>Create an Account</Text>
        <Text style={defaultStyles.HeaderBottomText}>
          Create your account for save your progress and rent a bike!{' '}
        </Text>
      </View>
      <View style={{width: '100%', gap: 8, marginBottom: 16}}>
        <TextInputComponent placeholder="Email" value="" style={{}} />
        <TextInputComponent placeholder="Password" value="" style={{}} />
      </View>
      <Button
        type={['tertiary']}
        title="Sign Up"
        onPress={() => {
          nav.navigate('SignIn' as never);
        }}
      />
      <OrDivider />
      <LinkText
        align="center"
        title="Already Have an Account? Sign In"
        textStyle="link"
        onPress={() => {
          nav.navigate('SignIn' as never);
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
