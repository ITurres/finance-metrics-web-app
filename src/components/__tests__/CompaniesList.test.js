import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'; // Import the MemoryRouter
import CompaniesList from '../CompaniesList';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('CompaniesList component renders without errors', () => {
  test('CompaniesList component renders loading spinner when loading is true', () => {
    useSelector.mockReturnValue({ loading: true });

    const { getByRole } = render(
      <MemoryRouter>
        <CompaniesList companies={[]} />
      </MemoryRouter>,
    );

    const loadingSpinner = getByRole('status');
    expect(loadingSpinner).toBeInTheDocument();
  });

  test('CompaniesList component renders error message when error is true', () => {
    useSelector.mockReturnValue({ error: 'Test error message' });

    const { getByText } = render(
      <MemoryRouter>
        <CompaniesList companies={[]} />
      </MemoryRouter>,
    );

    const errorMessage = getByText('Something went wrong...');
    expect(errorMessage).toBeInTheDocument();
  });

  test('CompaniesList component renders CompanyCard components when there are companies', () => {
    useSelector.mockReturnValue({ loading: false, error: null });

    const companies = [
      {
        symbol: 'TST1',
        image: 'test-image1.jpg',
        companyName: 'Test Company 1',
        price: '100',
      },
      {
        symbol: 'TST2',
        image: 'test-image2.jpg',
        companyName: 'Test Company 2',
        price: '200',
      },
    ];

    const { getByText, getByAltText } = render(
      <MemoryRouter>
        <CompaniesList companies={companies} />
      </MemoryRouter>,
    );

    const symbolElement1 = getByText('TST1');
    const symbolElement2 = getByText('TST2');
    expect(symbolElement1).toBeInTheDocument();
    expect(symbolElement2).toBeInTheDocument();

    const imageElement1 = getByAltText('Test Company 1');
    const imageElement2 = getByAltText('Test Company 2');
    expect(imageElement1).toBeInTheDocument();
    expect(imageElement2).toBeInTheDocument();
  });
});
