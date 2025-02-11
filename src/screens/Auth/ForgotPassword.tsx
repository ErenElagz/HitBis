// React
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
// Styles
import defaultStyles from '../../styles/DefaultStyles';
import Fonts from '../../styles/Fonts';
import Colors from '../../styles/Colors';
import Button from '../../components/Button';
// Components
import InputText from '../../components/InputText';
import LinkText from '../../components/Linktext';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ForgotPasswordScreen() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          gap: 4,
          marginTop: 48,
          marginBottom: 24,
          marginHorizontal: 4,
        }}>
        <Icon name="password" size={54} color={Colors.light} />
        <Text style={defaultStyles.HeaderText}>Forgot Password</Text>
        <Text style={defaultStyles.HeaderBottomText}>Enter your email to get your verification link to reset password</Text>
      </View>

      <View style={{width: '100%', gap: 8, marginBottom: 16}}>
        <InputText placeholder="E-mail" />
      </View>

      <Button type="secondary" title="Send Verification Link" />
      <LinkText
        align="center"
        title="Go Back!"
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
});
