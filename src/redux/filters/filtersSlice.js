const { createSlice } = require('@reduxjs/toolkit');
const {
  getCategories,
  getIngredients,
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
  reducers: {
    setSearchQuery(state, action) {
      return {
        ...state,
        searchQuery: action.payload,
      };
    },

    setSelectedCategory(state, action) {
      return {
        ...state,
        selectedCategory: action.payload,
      };
    },
    setSelectedIngredient(state, action) {
      return {
        ...state,
        selectedIngredient: action.payload,
      };
    },
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
    [getIngredients.pending](state) {
      state.isLoading = true;
    },
    [getIngredients.fulfilled](state, action) {
      state.ingredients = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [getIngredients.rejected](state, action) {
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
export const { setSearchQuery, setSelectedCategory, setSelectedIngredient } =
  filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
