//home.js . import useState and bootstrap componnets
import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

//main Home function
const Home = () => {
  const [name, setName] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  //handleLogin function to handle login logic and set setLoggedIn to true upon input entered
  const handleLogin = () => {
    if (name.trim() !== '') {
      setLoggedIn(true);
    }
  };

  // handleLogout function to handle logout logic and set setLoggedIn to false 

  const handleLogout = () => {
    setName('');
    setLoggedIn(false);
  };

  //return div with form and button and handle button onclick events using ternary operation when loggedIn is true or false
  return (
    <Container className="mt-5">
      {loggedIn ? (
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <h1>Welcome {name}</h1>
            <Button variant="danger" onClick={handleLogout}>Logout</Button>
          </Col>
        </Row>
      ) : (
        <Row className="justify-content-center">
          <Col md={6}>
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
              <div className="d-flex justify-content-center">
                    <Button variant="primary" onClick={handleLogin} className="mt-4 col-3">Login</Button>
              </div>
            </Form>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Home;