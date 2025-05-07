import AsyncStorage from '@react-native-async-storage/async-storage';
import API from './api';
import axios from 'axios';

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
    const responte = await API.post('/auth/login', {email, password});
    console.log(responte);
    const {token} = responte.data.accessToken;
    await storeToken(token);
    return token;
  } catch (error) {
    console.log(error.response ? error.response.data : error.message);
    return null;
  }
};
