import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
function NavBoostrap() {
  return (
      <Navbar bg="success" variant="dark">
        <Container>
            <Navbar.Brand>Fuel Quote Project</Navbar.Brand>
            <Nav className="me-auto">
            </Nav>
        </Container>
      </Navbar>
  );
}

export default NavBoostrap;