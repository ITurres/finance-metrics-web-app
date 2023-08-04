import filterCompaniesData from '../filterCompaniesData.js';

describe('filterCompaniesData', () => {
  const companies = [
    {
      symbol: 'AAPL',
      price: 192.58,
      beta: 1.292349,
      volAvg: 56493540,
      mktCap: 3029033126113,
      lastDiv: 0.96,
      range: '124.17-198.23',
      changes: -3.025,
      companyName: 'Apple Inc.',
      currency: 'USD',
      cik: '0000320193',
      isin: 'US0378331005',
      cusip: '037833100',
      industry: 'Consumer Electronics',
      website: 'https://www.apple.com',
      ceo: 'Mr. Timothy D. Cook',
      sector: 'Technology',
      country: 'US',
      fullTimeEmployees: '164000',
      phone: '408 996 1010',
      address: 'One Apple Park Way',
      city: 'Cupertino',
      state: 'CA',
      zip: '95014',
      image: 'https://financialmodelingprep.com/image-stock/AAPL.png',
    },
  ];

  it('should return an object with the filtered data', () => {
    const result = filterCompaniesData(companies[0]);

    expect(result).toEqual({
      symbol: 'AAPL',
      price: `USD ${192.58}`,
      beta: 1.292349,
      volAvg: 56493540,
      mktCap: 3029033126113,
      lastDiv: 0.96,
      range: '124.17-198.23',
      changes: -3.025,
      companyName: 'Apple Inc.',
      sector: 'Technology',
      website: 'https://www.apple.com',
      image: 'https://financialmodelingprep.com/image-stock/AAPL.png',
    });
  });
});
