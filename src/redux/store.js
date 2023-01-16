import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './../redux/state';

export const store = configureStore({
  reducer: {
    global: globalReducer
  },
})