import axios from 'axios';

axios.defaults.baseURL = '';

// Utils

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

