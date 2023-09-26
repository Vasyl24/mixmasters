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

export const addFavoriteDrink = createAsyncThunk(
  'drinks/addFavoriteDrink',
  async (newFavoriteDrink, thunkAPI) => {
    try {
      const response = await axios.post(`/favorite/add`, newFavoriteDrink);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getDrinkById = createAsyncThunk(
  'drinks/getDrinkByID',
  async (drinkId, thunkAPI) => {
    try {
      const response = await axios.get(`/drinks/${drinkId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchMainpage = createAsyncThunk(
  'drinks/fetchMainpage',
  async (count, thunkAPI) => {
    try {
      const response = await axios.get(`/drinks/mainpage?count=${count}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
