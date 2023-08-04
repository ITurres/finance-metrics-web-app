import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import CompanyCard from './CompanyCard';

const CompaniesList = ({ companies }) => {
  const { loading, error } = useSelector((state) => state.companies);

  if (loading) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Something went wrong...</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="companies-container">
      {companies.map((company, index) => (
        <CompanyCard company={company} index={index} key={company.symbol} />
      ))}
    </div>
  );
};

CompaniesList.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default CompaniesList;
