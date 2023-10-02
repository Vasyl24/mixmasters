import { setAuthHeader, clearAuthHeader } from '../services';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

export const signupUser = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/signup', credentials);

      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error('Bad request');
      } else if (error.response && error.response.status === 401) {
        toast.error('You are not logged in');
      } else if (error.response && error.response.status === 403) {
        toast.error('Access is denied');
      } else if (error.response && error.response.status === 409) {
        toast.error('Email in use');
      } else {
        toast.error('Registration error');
      }
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
      if (error.response && error.response.status === 401) {
        toast.error('Unauthorized');
      if (error.response && error.response.status === 400) {
        toast.error("Bad request")
      } else if (error.response && error.response.status === 401) {
        toast.error("You are not logged in")
      } else if (error.response && error.response.status === 403) {
        toast.error("Access is denied")
      } else if (error.response && error.response.status === 409) {
        toast.error('Email in use');
      } else {
        toast.error('Authentication Error');
      }
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

export const updateUser = createAsyncThunk(
  'auth/update',
  async (formData, thunkAPI) => {
    try {
      const res = await axios.patch('/users/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(formData);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
