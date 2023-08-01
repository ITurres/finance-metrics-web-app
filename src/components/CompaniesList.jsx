import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import CompanyCard from './CompanyCard';

const CompaniesList = ({ companies }) => {
  const { loading, error } = useSelector((state) => state.companies);

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (error) return <h2>{error}</h2>;

  return (
    <div className="companies-container">
      {companies.map((company) => (
        <CompanyCard company={company} key={company.symbol} />
      ))}
    </div>
  );
};

CompaniesList.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default CompaniesList;
