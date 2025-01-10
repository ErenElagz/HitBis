import {loginSuccess, logout} from '../slices/authSlice';
import api from '../../services/api';

export const loginUser = credentials => async dispatch => {
  try {
    const response = await api.post('/auth/login', credentials);
    dispatch(loginSuccess({token: response.data.token, user: response.data.user}));
  } catch (error) {
    console.error('loginUser', error);
    throw error;
  }
};

export const logoutUser = () => async dispatch => {
  dispatch(logout());
};

export const registerUser = credentials => async dispatch => {
  try {
    const response = await api.post('/auth/register', credentials);
    dispatch(loginSuccess({token: response.data.token, user: response.data.user}));
  } catch (error) {
    console.error('registerUser', error);
    throw error;
  }
};
