import AsyncStorage from '@react-native-async-storage/async-storage';
import API from './api';

export const storeToken = async token => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (error) {
    console.error('Error storing token:', error);
  }
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    return token;
  } catch (error) {
    console.error('Error retrieving token:', error);
    return null;
  }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('token');
  } catch (error) {
    console.error('Error removing token:', error);
  }
};

export const loginRequest = async (email, password) => {
  try {
    const res = await API.post('/auth/login', {email, password});
    const token = res.data.data.accessToken;
    await storeToken(token);
    return token;
  } catch (error) {
    console.log(error.response ? error.response.data : error.message);
    return null;
  }
};

export const logoutRequest = async () => {
  try {
    const token = await getToken();
    if (token) {
      await removeToken();
    }
  } catch (error) {
    console.error('Error logging out:', error);
  }
};

export const registerUser = async (username, email, password) => {
  try {
    const res = await API.post('/user/register', {username, email, password});
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error.response ? error.response.data : error.message);
    return null;
  }
};
