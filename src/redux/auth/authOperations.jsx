import { setAuthHeader, clearAuthHeader } from '../services';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/signup', credentials);

      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const signinUser = createAsyncThunk(
  'auth/signinUser',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/signin', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const signoutUser = createAsyncThunk(
  'auth/signoutUser',
  async (_, thunkAPI) => {
    try {
      const res = await axios.post('/auth/signout');
      clearAuthHeader();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('No valid token');
    }
    setAuthHeader(persistedToken);
    try {
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (formData, thunkAPI) => {
    try {
      const res = await axios.patch('/users/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const subscribeUser = createAsyncThunk(
  'auth/subscribeUser',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/subscribe', credentials);
      console.log(res.data);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
