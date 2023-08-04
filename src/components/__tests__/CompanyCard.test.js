import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CompanyCard from '../CompanyCard';

describe('CompanyCard component renders without errors', () => {
  test('CompanyCard component renders without errors', () => {
    const company = {
      image: 'test-image.jpg',
      companyName: 'Test Company',
      symbol: 'TST',
      price: '100',
    };

    const { getByText, getByAltText } = render(
      <Router>
        <CompanyCard company={company} index={0} />
      </Router>,
    );

    const symbolElement = getByText('TST');
    expect(symbolElement).toBeInTheDocument();

    const priceElement = getByText('100');
    expect(priceElement).toBeInTheDocument();

    const imageElement = getByAltText('Test Company');
    expect(imageElement).toBeInTheDocument();
  });
});
