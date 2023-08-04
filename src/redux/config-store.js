import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './companies/companiesSlice.js';

const store = configureStore({
  reducer: {
    companies: companiesReducer,
  },
});

export default store;
