//import appropriate components from packages
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Image} from 'react-bootstrap';
import storelogo from '../images/storelogo.jpg';

//Header function to render navigation menu for all pages(Links) using bootstrap
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" >
      <Navbar.Brand as={Link} to="/">
            <Image
                    src={storelogo}
                    width="70"
                    height="50"
                    className="d-inline-block align-top"
                    alt="Store Logo"
              />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/aboutus">About</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
