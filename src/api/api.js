import axios from 'axios';
import Config from 'react-native-config';

const API = axios.create({
  baseURL: Config.BACKEND_API_URL, // Çevre değişkenini doğru şekilde aldığından emin ol
});

// İstek öncesi header ayarlarını yap
API.interceptors.request.use(
  config => {
    const token = ''; // Token'ı buradan al
    if (token) config.headers.Authorization = `Bearer ${token}`;
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
