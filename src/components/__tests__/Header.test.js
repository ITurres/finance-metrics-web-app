import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';

describe('Header component renders without errors', () => {
  test('Header component renders without errors and displays name', () => {
    const { getByRole, getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const headerContainer = getByRole('navigation');
    expect(headerContainer).toBeInTheDocument();

    const headerText = getByText('finance');
    expect(headerText).toBeInTheDocument();
  });
});
