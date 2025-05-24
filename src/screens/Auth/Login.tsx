// React
import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
// Styles
import defaultStyles from '../../styles/DefaultStyles';
import Fonts from '../../styles/Fonts';
import Colors from '../../styles/Colors';
// Components
import Button from '../../components/Button';
import InputText from '../../components/InputText';
import LinkText from '../../components/LinkText';
import OrDivider from '../../components/OrDivider';
//API
import {loginRequest} from '../../api/authService';
import {getUser} from '../../api/userService';
// Context
import {useAuth} from '../../Context/authContext';
// AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';
// context

export default function LoginScreen() {
  const nav = useNavigation();

  const {login} = useAuth();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      if (email.trim() === '') {
        setEmailError('Email cannot be empty');
        return;
      } else {
        setEmailError('');
      }
      if (!isValidEmail(email)) {
        setEmailError('Invalid email address');
        return;
      } else {
        setEmailError('');
      }
      if (password.trim() === '') {
        setPasswordError('Password cannot be empty');
        return;
      } else {
        setPasswordError('');
      }

      const token = await loginRequest(email, password);
      if (token) {
        const userData = await getUser();
        console.log(userData);
        await login(token, {
          name: userData.name,
          username: userData.username,
          avatar: userData.avatar,
        });
        setError('');
      } else {
        setError('Invalid password or email address.');
      }
    } catch (error) {
      setError('Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  const isValidEmail = (email: string) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  };

  return (
    <View style={styles.container}>
      <View style={{width: '100%', gap: 8, marginTop: 48, marginBottom: 24}}>
        <Text style={defaultStyles.HeaderText}>Login in the HitBis</Text>
        <Text style={defaultStyles.HeaderBottomText}>Login to your account to see your progress and routes</Text>
      </View>

      <View style={{width: '100%', gap: 8}}>
        <InputText placeholder="Email" value={email} onChangeText={setEmail} error={emailError} />
        {email !== '' && !isValidEmail(email) && <Text style={{color: 'red', fontSize: 12}}>Please enter a valid email address.</Text>}
        <InputText placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry={!isPasswordVisible} showToggle error={passwordError} />
        {error !== '' && <Text style={{color: 'red', fontSize: 12, marginTop: 8}}>{error}</Text>}
      </View>

      <LinkText
        align="right"
        title="forgot password?"
        onPress={() => {
          nav.navigate('ForgotPassword' as never);
        }}
      />

      <Button type="secondary" title="Sign In" onPress={handleLogin} loading={isLoading} disabled={!isValidEmail(email) || password.trim() === '' || isLoading} />

      <OrDivider />

      <LinkText
        align="center"
        title="Create a Account? Sign Up"
        onPress={() => {
          nav.navigate('Register' as never);
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
