import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import companiesData from '../../db/companiesData.json';
import filterCompaniesData from '../../utils/filterCompaniesData.js';
import config from '../../config.js';

const fetchCompanies = createAsyncThunk(
  'companies/fetchCompanies',
  async (thunkAPI) => {
    const apiKey = config.FMP_KEY;

    if (localStorage.getItem('companies')) {
      return JSON.parse(localStorage.getItem('companies'));
    }

    try {
      const companies = await axios.get(
        `https://financialmodelingprep.com/api/v3/profile/${companiesData.symbols.toString()}?apikey=${apiKey}`,
      );

      const filteredCompaniesData = companies.data.map((company) => filterCompaniesData(company));

      localStorage.setItem('companies', JSON.stringify(filteredCompaniesData));
      return filteredCompaniesData;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

export default fetchCompanies;
