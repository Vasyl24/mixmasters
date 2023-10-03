import { createSlice } from '@reduxjs/toolkit';
import {
  fetchMyDrinks,
  deleteMyDrink,
  fetchFavoriteDrinks,
  deleteFavoriteDrink,
  fetchMainpage,
  // fetchAllDrinks,
  // setLimitValue,
  // setPageValue,
} from './drinksOperations';
import { signoutUser } from '../auth/authOperations';
import { toast } from 'react-hot-toast';

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  toast.error('Something went wrong please try later.', {
    position: 'top-center',
  });
};

const drinksSlice = createSlice({
  name: 'drinks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchMyDrinks.pending](state) {
      state.isLoading = true;
    },
    [fetchMyDrinks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchMyDrinks.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteMyDrink.pending](state) {
      state.isLoading = true;
    },
    [deleteMyDrink.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        drink => drink.id === action.meta.arg.id
      );
      state.items.splice(index, 1);
      toast.success('Drink deleted successfully.', { position: 'top-center' });
    },
    [deleteMyDrink.rejected]: handleRejected,

    [fetchFavoriteDrinks.pending](state) {
      state.isLoading = true;
    },
    [fetchFavoriteDrinks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchFavoriteDrinks.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteFavoriteDrink.pending](state) {
      state.isLoading = true;
    },
    [deleteFavoriteDrink.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        drink => drink._id === action.meta.arg.id
      );
      state.items.splice(index, 1);
      toast.success('Drink deleted successfully.');
    },
    [deleteFavoriteDrink.rejected]: handleRejected,
    [fetchMainpage.pending](state) {
      state.isLoading = true;
    },
    [fetchMainpage.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchMainpage.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // [fetchAllDrinks.pending](state) {
    //   state.isLoading = true;
    // },
    // [fetchAllDrinks.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items = action.payload;
    //   state.count = action.payload.length;
    // },
    // [fetchAllDrinks.rejected](state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    [signoutUser.fulfilled](state, action) {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    },

    // [setLimitValue.fulfilled](state, action) {
    //   state.limit = action.payload;
    // },

    // [setPageValue.fulfilled](state, action) {
    //   state.page = action.payload;
    // },
  },
});

export const drinksReducer = drinksSlice.reducer;
