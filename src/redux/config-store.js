import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './companies/companiesSlice';

const store = configureStore({
  reducer: {
    companiesReducer,
  },
});

export default store;
