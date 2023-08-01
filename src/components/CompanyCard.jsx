import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CompanyCard = ({ company }) => (
  <Card>
    <Card.Body>
      <Link to={`/company?symbol=${company.symbol}`}>
        <FaArrowRight className="card__arrow-right" />
      </Link>
      <Card.Img src={company.image} alt={company.companyName} />
      <Card.Title>{company.symbol}</Card.Title>
      <Card.Text>{company.price}</Card.Text>
    </Card.Body>
  </Card>
);

CompanyCard.propTypes = {
  company: PropTypes.shape({
    image: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CompanyCard;
