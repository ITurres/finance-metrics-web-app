import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaAngleLeft, FaMicrophone, FaCog } from 'react-icons/fa';

const Header = () => (
  <Navbar style={{ background: 'var(--dark-pink)' }}>
    <Container>
      <NavLink to="/finance-metrics-web-app/">
        <FaAngleLeft className="text-body-primary" size={26} color="white" />
      </NavLink>
      <h3 className="mb-0">finance</h3>
      <div>
        <FaMicrophone size={22} color="white" />
        <FaCog size={22} color="white" style={{ marginLeft: '2rem' }} />
      </div>
    </Container>
  </Navbar>
);

export default Header;
