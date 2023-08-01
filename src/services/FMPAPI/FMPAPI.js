import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const companiesStockSymbols = [
  'AAPL',
  'AMZN',
  'SSNLF',
  'MSFT',
  'GOOG',
  'NVDA',
  'TSLA',
  'META',
  'ORCL',
  'NFLX',
  'ADBE',
  'CSCO',
  'JNJ',
];

const fetchCompanies = createAsyncThunk(
  'companies/fetchCompanies',
  async (thunkAPI) => {
    const apiKey = '30935bc4d24e2abdfb241125ca11dde3';

    const fetchCompanyData = async (symbol) => {
      const localStorageKey = `company_${symbol}`;
      let dataFromLocalStorage = localStorage.getItem(localStorageKey);

      if (!dataFromLocalStorage) {
        const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`;
        try {
          const response = await axios.get(url);
          dataFromLocalStorage = JSON.stringify(response.data);
          localStorage.setItem(localStorageKey, dataFromLocalStorage);
        } catch (error) {
          return thunkAPI.rejectWithValue(error);
        }
      }

      return JSON.parse(dataFromLocalStorage);
    };

    try {
      const companies = await Promise.all(
        companiesStockSymbols.map(fetchCompanyData),
      );
      return companies;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export default fetchCompanies;
