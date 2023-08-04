import fetchCompanies from '../../services/FMPAPI/FMPAPI.js'; // Assuming this is where the API function is imported from
import companiesReducer, { searchCompanies } from '../companies/companiesSlice.js';

describe('companiesSlice reducer', () => {
  const initialState = {
    companies: [
      { companyName: 'Apple Inc.' },
      { companyName: 'Microsoft Corporation' },
      { companyName: 'Amazon.com Inc.' },
    ],
    filteredCompanies: [],
    loading: false,
    error: null,
  };

  it('should update filteredCompanies when searchCompanies is dispatched', () => {
    const action = searchCompanies('apple');

    const newState = companiesReducer(initialState, action);

    expect(newState.filteredCompanies).toEqual([{ companyName: 'Apple Inc.' }]);
  });

  it('should update loading and companies on fetchCompanies fulfilled', () => {
    const companiesData = [
      { companyName: 'Apple Inc.' },
      { companyName: 'Microsoft Corporation' },
      { companyName: 'Amazon.com Inc.' },
    ];

    const action = {
      type: fetchCompanies.fulfilled.type,
      payload: companiesData,
    };

    const newState = companiesReducer(initialState, action);

    expect(newState.loading).toBe(false);
    expect(newState.companies).toEqual(companiesData);
  });

  it('should update loading and error on fetchCompanies rejected', () => {
    const errorMessage = 'API error';

    const action = {
      type: fetchCompanies.rejected.type,
      payload: { error: errorMessage },
    };

    const newState = companiesReducer(initialState, action);

    expect(newState.loading).toBe(false);
    expect(newState.error).toBe(errorMessage);
  });
});
