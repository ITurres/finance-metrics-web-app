import { useSelector } from 'react-redux';
import CompaniesList from '../components/CompaniesList';
import logo from '../assets/images/finance-logo.png';

const Home = () => {
  const companies = useSelector((state) => state.companies.companies);

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
      <h5
        className="container mt-2 pb-1"
        style={{ background: 'var(--dark-pink)' }}
      >
        Stats by Company
      </h5>
      <div className="companies__list">
        <CompaniesList companies={companies} />
      </div>
    </>
  );
};

export default Home;
