// React
import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
// Styles
import defaultStyles from '../../styles/defaultStyles';
import Fonts from '../../styles/fonts';
import Colors from '../../styles/colors';
import Button from '../../components/Button';
import {Alert} from 'react-native';
// Components
import InputText from '../../components/InputText';
import LinkText from '../../components/Linktext';
import OrDivider from '../../components/OrDivider';

export default function SignUp() {
  const nav = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (email === '' || password === '') {
      Alert.alert('error', 'Email and password cannot be empty');
      return;
    }
  };

  return (
    <View style={styles.container}>
      <View style={{width: '100%', gap: 8, marginTop: 48, marginBottom: 24}}>
        <Text style={defaultStyles.HeaderText}>Create an Account</Text>
        <Text style={defaultStyles.HeaderBottomText}>Create your account for save your progress and rent a bike!</Text>
      </View>

      <View style={{width: '100%', gap: 8, marginBottom: 16}}>
        <InputText placeholder="Email" value={email} onChangeText={setEmail} />
        <InputText placeholder="Password" value={password} onChangeText={setPassword} />
      </View>

      <Button
        type="secondary"
        title="Sign Up"
        onPress={() => {
          nav.navigate('SignIn' as never);
        }}
      />

      <OrDivider />

      <LinkText
        align="center"
        title="Already Have an Account? Sign In"
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
});
