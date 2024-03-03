// api.js
import axios from 'axios';
import {Platform} from 'react-native';

const BASE_URL =
  Platform.OS === 'android'
    ? 'http://10.0.2.2:3000/api'
    : 'http://localhost:3000/api';

const api = axios.create({
  baseURL: BASE_URL,
});

export const getFilms = async () => {
  try {
    const response = await api.get('/films');
    return response.data;
  } catch (error) {
    throw error;
  }
};
