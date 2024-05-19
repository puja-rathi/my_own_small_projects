// import react and other bootstrap components and all images
import React from 'react';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import storelogo from '../images/storelogo.jpg'; 
import storeImage1 from '../images/storeImage1.jpg'; 
import storeImage2 from '../images/storeImage2.jpg'; 

//About function to conatin store logo, other two images, description and contact details
const About = () => {
    return (
        <Container className="mt-4">
            <Row className="mb-4">
                <Col>
                <div className="d-flex align-items-center">
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="Store Logo"
                            src={storelogo}
                        />
                        <Figure.Caption className="ml-3 fig_custom_caption" >
                            <h3>My Online Store</h3>
                            <p>My online store is all about electronics items like watches, laptops, chargers, tablets, earphones, etc.</p>
                        </Figure.Caption>
                    </div>
                </Col>
            </Row>
            <Row className="mb-2">
                <Col>
                    <Figure>
                        <Figure.Image
                            width={400}
                            height={300}
                            alt="Store Image 1"
                            src={storeImage1}
                        />
                        <Figure.Caption>
                            Our Storefront
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col>
                    <Figure>
                        <Figure.Image
                            width={460}
                            height={300}
                            alt="Store Image 2"
                            src={storeImage2}
                        />
                        <Figure.Caption>
                            Inside Our Store
                        </Figure.Caption>
                    </Figure>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col>
                    <h4>Contact Us</h4>
                    <p>Email: <Link>info@myonlinestore.com</Link></p>
                    <p>Phone: +123 456 7890</p>
                    <p>Address: 123 Store Avenue, Reading, UK</p>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
