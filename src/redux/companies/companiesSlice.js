import { createSlice } from '@reduxjs/toolkit';
import fetchCompanies from '../../services/FMPAPI/FMPAPI.js';

const initialState = {
  companies: [],
  filteredCompanies: [],
  loading: false,
  error: null,
};

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    searchCompanies(state, action) {
      state.filteredCompanies = state.companies.filter((company) => {
        const companySymbol = company.companyName.toLowerCase();
        const searchTerm = action.payload.toLowerCase();
        return companySymbol.includes(searchTerm);
      });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCompanies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCompanies.fulfilled, (state, action) => {
        state.loading = false;
        state.companies = action.payload;
      })
      .addCase(fetchCompanies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error || 'Unknown error occurred';
      });
  },
});

export const { searchCompanies } = companiesSlice.actions;

export default companiesSlice.reducer;
