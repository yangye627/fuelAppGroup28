


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
function NavBoostrap() {
  return (
      <Navbar bg="success" variant="dark">
        <Container>
            <Navbar.Brand>Fuel Quote Project</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link to="/login" as={Link}>Login</Nav.Link>
                <Nav.Link to="/register" as={Link}>Register</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
  );
}

export default NavBoostrap;