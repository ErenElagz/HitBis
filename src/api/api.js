import axios from 'axios';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API = axios.create({
  baseURL: Config.BACKEND_API_URL, // Çevre değişkenini doğru şekilde aldığından emin ol
});

// İstek öncesi header ayarlarını yap
API.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token'); // Token'ı async olarak alıyoruz
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Response hata yakalama
API.interceptors.response.use(
  response => response,
  error => {
    console.error('Response error:', error.response || error.message);
    return Promise.reject(error);
  },
);

export default API;
