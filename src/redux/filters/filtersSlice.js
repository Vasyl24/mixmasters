const { createSlice } = require("@reduxjs/toolkit");
const {
  getCategories,
  getIngridients,
  getGlasses,
} = require('./filtersOperations');

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    searchQuery: '',
    categories: [],
    ingredients: [],
    glasses: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getCategories.pending](state) {
      state.isLoading = true;
    },
    [getCategories.fulfilled](state, action) {
      state.categories = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [getCategories.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getIngridients.pending](state) {
      state.isLoading = true;
    },
    [getIngridients.fulfilled](state, action) {
      state.ingredients = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [getIngridients.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getGlasses.pending](state) {
      state.isLoading = true;
    },
    [getGlasses.fulfilled](state, action) {
      state.glasses = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [getGlasses.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const filtersReducer = filterSlice.reducer;