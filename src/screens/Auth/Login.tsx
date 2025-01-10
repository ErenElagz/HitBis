// React
import {View, Text, StyleSheet, Alert} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
// Styles
import defaultStyles from '../../styles/DefaultStyles';
import Fonts from '../../styles/Fonts';
import Colors from '../../styles/Colors';
import Button from '../../components/Button';
// Components
import InputText from '../../components/InputText';
import LinkText from '../../components/Linktext';
import OrDivider from '../../components/OrDivider';
import {loginUser} from '../../redux/actions/authActions';
import {loginSuccess} from '../../redux/slices/authSlice';

export default function LoginScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();
  const nav = useNavigation();

  const handleLogin = async () => {
    try {
      const data = await loginUser({email, password});
      dispatch(loginSuccess({token: data.token, user: {email}}));
      Alert.alert('Success', 'Login success');
    } catch (error: any) {
      Alert.alert('error', error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{width: '100%', gap: 8, marginTop: 48, marginBottom: 24}}>
        <Text style={defaultStyles.HeaderText}>Login in the HitBis</Text>
        <Text style={defaultStyles.HeaderBottomText}>Login to your account to see your progress and routes</Text>
      </View>

      <View style={{width: '100%', gap: 8}}>
        <InputText placeholder="Email" value={email} onChangeText={setEmail} />
        <InputText placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry={true} />
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
          handleLogin();
        }}
      />

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
