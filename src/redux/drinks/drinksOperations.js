import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const addMyDrinks = createAsyncThunk(
  'drinks/addMyDrinks',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post('/drinks/own/add');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
  async (drink, thunkAPI) => {
    try {
      const response = await axios.delete(`/drinks/own/remove`, {
        data: drink,
      });
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
      const response = await axios.get('/drinks/favorite');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFavoriteDrink = createAsyncThunk(
  'drinks/deleteFavoriteDrink',
  async (drink, thunkAPI) => {
    try {
      const response = await axios.delete(`/drinks/favorite/remove`, {
        data: drink,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFavoriteDrink = createAsyncThunk(
  'drinks/addFavoriteDrink',
  async (id, thunkAPI) => {
    try {
      const response = await axios.post(`/drinks/favorite/add`, id);
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

// export const fetchAllDrinks = createAsyncThunk(
//   'drinks/fetchAllDrinks',
//   async ({ page, limit }, thunkAPI) => {
//     try {
//       const response = await axios.get(
//         `/drinks/search?page=${page}&limit=${limit}`
//       );
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const fetchPopularDrinks = createAsyncThunk(
  'drinks/fetchPopularDrinks',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/drinks/popular`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const setLimitValue = createAsyncThunk('drinks/setLimitValue', limit => {
//   return limit;
// });

// export const setPageValue = createAsyncThunk('drinks/setPageValue', page => {
//   return page;
// });
