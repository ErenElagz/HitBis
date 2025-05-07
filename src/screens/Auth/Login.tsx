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
// Context
import {useAuth} from '../../Context/authContext';
// AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';
// context

export default function LoginScreen() {
  const nav = useNavigation();

  const {login, logout} = useAuth(); // AuthContext'ten login fonksiyonunu alıyoruz

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const handleLogin = async () => {
    try {
      const token = await loginRequest(email, password);
      console.log(token);
      if (token) {
        login(token);
      }
    } catch (error) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{width: '100%', gap: 8, marginTop: 48, marginBottom: 24}}>
        <Text style={defaultStyles.HeaderText}>Login in the HitBis</Text>
        <Text style={defaultStyles.HeaderBottomText}>Login to your account to see your progress and routes</Text>
      </View>

      <View style={{width: '100%', gap: 8}}>
        <InputText placeholder="Email" value={email} onChangeText={setEmail} error={error} />
        <InputText placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry={true} error={error} />
      </View>

      <LinkText
        align="right"
        title="forgot password?"
        onPress={() => {
          nav.navigate('ForgotPassword' as never);
        }}
      />

      <Button type="secondary" title="Sign In" onPress={handleLogin} />

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
