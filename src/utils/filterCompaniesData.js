const filterCompaniesData = (company) => ({
  symbol: company.symbol,
  price: `USD ${company.price}`,
  beta: company.beta,
  volAvg: company.volAvg,
  mktCap: company.mktCap,
  lastDiv: company.lastDiv,
  range: company.range,
  changes: company.changes,
  companyName: company.companyName,
  sector: company.sector,
  website: company.website,
  image: company.image,
});

export default filterCompaniesData;
