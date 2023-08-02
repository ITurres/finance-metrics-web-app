import { useSelector } from 'react-redux';
import CompaniesList from '../components/CompaniesList';
import logo from '../assets/images/finance-logo.png';
import SearchBar from '../components/SearchBar';

const Home = () => {
  let companies = useSelector((state) => state.companies);

  if (companies.filteredCompanies.length === 0) {
    companies = companies.companies;
  } else {
    companies = companies.filteredCompanies;
  }

  return (
    <>
      <div className="container hero d-flex gap-3">
        <img src={logo} alt="finance app logo" className="logo w-50 p-3" />
        <div className="align-self-center">
          <h1 className="strong">Stocks</h1>
          <span>
            {companies.length}
            &nbsp;companies
          </span>
        </div>
      </div>
      <div
        className="container mt-2 p-2 d-flex justify-content-between align-items-center"
        style={{ background: 'var(--dark-pink)' }}
      >
        <h5 className="mb-0">Stats by Company</h5>
        <SearchBar />
      </div>
      <div className="companies__list">
        <CompaniesList companies={companies} />
      </div>
    </>
  );
};

export default Home;
