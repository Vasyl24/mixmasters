import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import {
  signupUser,
  signinUser,
  signoutUser,
  refreshUser,
  updateUser,
} from './authOperations';

const initialState = {
  user: {
    name: '',
    birthdate: null,
    email: null,
    avatarURL: '',
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {

    // signUser
    
    [signupUser.pending](state, _) {
      state.isRefreshing = true;
    },

    [signupUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },

    [signupUser.rejected](state, action) {
      state.error = action.payload;
    },

    // loginUser

    [signinUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [signinUser.rejected](state, action) {
      state.error = action.payload;
    },

    // logoutUser

    [signoutUser.fulfilled](state) {
      state.user = { name: null, birthdate: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [signoutUser.rejected](state, action) {
      state.error = action.payload;
    },

    // refreshUser

    [refreshUser.pending](state, action) {
      state.isRefreshing = true;
    },

    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },

    [refreshUser.rejected](state, action) {
      state.error = action.payload;
    },
    // updateUser
    [updateUser.pending](state, _) {
      state.isRefreshing = true;
    },

    [updateUser.fulfilled](state, action) {
      console.log(action.payload);
      state.user.name = action.payload.name;
      state.user.avatarURL = action.payload.avatarURL;
      state.isRefreshing = false;
    },

    [updateUser.rejected](state, action) {
      state.error = action.payload;
      state.isRefreshing = false;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

export const persistedUsersReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
