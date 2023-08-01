import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './companies/companiesSlice';

const store = configureStore({
  reducer: {
    companies: companiesReducer,
  },
});

export default store;
