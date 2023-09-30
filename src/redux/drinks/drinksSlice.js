import { createSlice } from '@reduxjs/toolkit';
import {
  fetchMyDrinks,
  deleteMyDrink,
  fetchFavoriteDrinks,
  deleteFavoriteDrink,
  fetchMainpage,
  fetchAllDrinks,
} from './drinksOperations';
import { toast } from 'react-toastify';

//Для тестування. Видалити коли буде робочий бек
// import coctails from 'temporary/recipes.json';

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  toast.error('Something went wrong please try later.', {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
};

const drinksSlice = createSlice({
  name: 'drinks',
  initialState: {
    //Для тестування. Замінити на "items: [],"" коли буде робочий бек
    items: [],
    // items: [],
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
        drink => drink.id === action.payload.id
      );
      state.items.splice(index, 1);
      toast.success('Drink deleted successfully.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
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
        drink => drink.id === action.payload.id
      );
      state.items.splice(index, 1);
      toast.success('Drink deleted successfully.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
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
    [fetchAllDrinks.pending](state) {
      state.isLoading = true;
    },
    [fetchAllDrinks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchAllDrinks.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const drinksReducer = drinksSlice.reducer;
