import { setAuthHeader, clearAuthHeader } from '../services';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const signupUser = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/signup', credentials);

      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signinUser = createAsyncThunk(
  'auth/signin',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/signin', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signoutUser = createAsyncThunk(
  'auth/signout',
  async (_, thunkAPI) => {
    try {
      const res = await axios.post('/auth/signout');
      clearAuthHeader();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
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
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
