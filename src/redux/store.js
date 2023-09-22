import { configureStore } from '@reduxjs/toolkit';
import { persistedUsersReducer } from './auth/authSlice';
import { drinksReducer } from './drinks/drinksSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
export const store = configureStore({
  reducer: {
    auth: persistedUsersReducer,
    drinks: drinksReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
