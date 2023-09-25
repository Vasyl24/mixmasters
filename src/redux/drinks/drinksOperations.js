import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMyDrinks = createAsyncThunk(
  'drinks/fetchMyDrinks',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/drinks/own');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteMyDrink = createAsyncThunk(
  'drinks/deleteMyDrink',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/drinks/own/remove/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFavoriteDrinks = createAsyncThunk(
  'drinks/fetchFavoriteDrinks',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/favorite');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFavoriteDrink = createAsyncThunk(
  'drinks/deleteFavoriteDrink',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/favorite/remove/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
