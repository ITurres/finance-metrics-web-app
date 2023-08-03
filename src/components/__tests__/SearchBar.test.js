import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import SearchBar from '../SearchBar';
import { searchCompanies } from '../../redux/companies/companiesSlice.js';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('SearchBar component renders without errors', () => {
  test('SearchBar component renders without errors and dispatches searchCompanies action', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    const { getByTestId } = render(<SearchBar />);

    const searchButton = getByTestId('search-button');
    fireEvent.click(searchButton);

    const inputField = getByTestId('search-input');
    fireEvent.change(inputField, { target: { value: 'test search' } });

    fireEvent.click(searchButton);

    expect(mockDispatch).toHaveBeenCalledWith(searchCompanies('test search'));
  });
});
