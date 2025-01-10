import api from './api';

export const login = async credentials => {
  try {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const register = async credentials => {
  try {
    const response = await api.post('/auth/register', credentials);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
