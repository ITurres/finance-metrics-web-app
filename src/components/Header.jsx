import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaAngleLeft, FaMicrophone, FaCog } from 'react-icons/fa';

const Header = () => (
  <Navbar className="bg-dark dark" style={{ background: 'red' }}>
    <Container>
      <NavLink to="/">
        <FaAngleLeft className="text-body-primary" />
      </NavLink>
      {/* text */}
      <FaMicrophone size={30} color="red" />
      <FaCog size={30} color="blue" />
    </Container>
  </Navbar>
);

export default Header;
