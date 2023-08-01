import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CompanyCard = ({ company, index }) => {
  const cardBgColor = index % 4 === 0 || index % 4 === 3 ? 'var(--bright-pink-2)' : 'var(--bright-pink)';
  // * the above will give us an alternate shade of pink on a 2 layout grid

  return (
    <Card
      className="border-0"
      style={{ background: `${cardBgColor}` }}
    >
      <Card.Body className="text-end p-2">
        <Link
          to={`/company?symbol=${company.symbol}`}
          className="text-decoration-none"
          style={{ color: 'white' }}
        >
          <FaArrowRight className="FaArrowRight" size={22} color="white" />
          <Card.Img
            src={company.image}
            alt={company.companyName}
            className="company__logo p-3"
          />
          <Card.Title>
            <strong>{company.symbol}</strong>
          </Card.Title>
          <Card.Text>{company.price}</Card.Text>
        </Link>
      </Card.Body>
    </Card>
  );
};

CompanyCard.propTypes = {
  company: PropTypes.shape({
    image: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default CompanyCard;
