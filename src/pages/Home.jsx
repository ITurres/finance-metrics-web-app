import { useSelector } from 'react-redux';
import CompaniesList from '../components/CompaniesList';

const Home = () => {
  const companies = useSelector((state) => state.companies.companies);

  return (
    <>
      <div className="container hero">
        <img src="" alt="" />
        <h1>Stocks</h1>
        <span>
          {companies.length}
          &nbsp;companies
        </span>
      </div>
      <div className="container">Stats by Company</div>
      <div className="companies__list">
        <CompaniesList companies={companies} />
      </div>
    </>
  );
};

export default Home;
