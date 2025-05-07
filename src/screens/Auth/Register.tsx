// React
import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
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
// API
import {registerUser} from '../../api/authService';
// Toast
import Toast from 'react-native-toast-message';

export default function RegisterScreen() {
  const nav = useNavigation();

  const [username, setUsername] = React.useState('');
  const [usernameError, setUsernameError] = React.useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [confirmPasswordError, setConfirmPasswordError] = React.useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const showTogglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const isValidEmail = (email: string) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  };

  const handleRegister = async () => {
    setIsLoading(true);
    try {
      if (username.trim() === '') {
        setUsernameError('Username cannot be empty');
        return;
      } else {
        setUsernameError('');
      }

      if (username.length < 5) {
        setUsernameError('Username must be at least 5 characters long');
        return;
      } else {
        setUsernameError('');
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

      if (password !== confirmPassword) {
        setConfirmPasswordError('Passwords do not match');
        return;
      } else {
        setConfirmPasswordError('');
      }

      if (password.length < 6) {
        setPasswordError('Password must be at least 6 characters long');
        return;
      } else {
        setPasswordError('');
      }

      const response = await registerUser(username, email.toLowerCase, password);
      if (response.isSuccess === true) {
        Toast.show({
          type: 'success',
          position: 'top',
          text1: 'User registered successfully!',
          text2: 'You can now log in to your account.',
        });
        nav.navigate('Login');
      } else {
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Registration failed!',
          text2: 'Please try again later.',
        });
        const errorData = await response.data;
        console.error('Error registering user:', errorData);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{width: '100%', gap: 8, marginTop: 48, marginBottom: 24}}>
        <Text style={defaultStyles.HeaderText}>Create an Account</Text>
        <Text style={defaultStyles.HeaderBottomText}>Create your account for save your progress and rent a bike!</Text>
      </View>

      <View style={{width: '100%', gap: 8, marginBottom: 16}}>
        <InputText placeholder="Username" value={username} onChangeText={setUsername} error={usernameError} />
        <InputText placeholder="Email" value={email} onChangeText={setEmail} error={emailError} />
        <InputText placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry={!isPasswordVisible} showToggle error={passwordError} />
        <InputText
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!isPasswordVisible}
          showToggle
          error={confirmPasswordError}
        />
      </View>

      <Button
        type="secondary"
        title="Sign Up"
        loading={isLoading}
        disabled={!isValidEmail(email) || password.trim() === '' || confirmPassword.trim() === '' || isLoading}
        onPress={handleRegister}
      />

      <OrDivider />

      <LinkText
        align="center"
        title="Already Have an Account? Sign In"
        onPress={() => {
          nav.navigate('Login' as never);
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
