import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCategories = createAsyncThunk(
  'filters/getCategories',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/filters/categories');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getIngredients = createAsyncThunk(
  'filters/getIngredients',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/filters/ingredients');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getGlasses = createAsyncThunk(
  'filters/getGlasses',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/filters/glasses');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setSearchQuery = createAction('filters/setSearchQuery');

export const setSelectedCategory = createAction('filters/setSelectedCategory');

export const setSelectedIngredient = createAction(
  'filters/setSelectedIngredient'
);
