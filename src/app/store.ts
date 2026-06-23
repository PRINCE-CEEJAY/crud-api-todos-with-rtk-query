import dummyApiSlice from './services/apiSlice';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [dummyApiSlice.reducerPath]: dummyApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dummyApiSlice.middleware),
});

setupListeners(store.dispatch);
