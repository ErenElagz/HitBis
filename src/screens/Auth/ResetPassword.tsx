// React
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
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ResetPassword() {
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
        <Icon name="lock-reset" size={54} color={Colors.light} />
        <Text style={defaultStyles.HeaderText}>Reset Password</Text>
        <Text style={defaultStyles.HeaderBottomText}>
          Enter Your New Password.
        </Text>
      </View>

      <View style={{width: '100%', gap: 8, marginBottom: 16}}>
        <InputText placeholder="Password" />
        <InputText placeholder="Re-Password" />
      </View>

      <Button
        type="secondary"
        title="Reset Password"
        onPress={() => {
          nav.navigate('WelcomeScreen' as never);
        }}
      />

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
