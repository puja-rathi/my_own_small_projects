//import bootstrap components and all images
import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Dropdown } from 'react-bootstrap';
import i1 from '../images/i1.jpg';
import i2 from '../images/i2.jpg';
import i3 from '../images/i3.jpg';
import i4 from '../images/i4.jpg';
import i5 from '../images/i5.jpg';
import i6 from '../images/i6.jpg';
import i7 from '../images/i7.jpg';
import i8 from '../images/i8.jpg';
import i9 from '../images/i9.jpg';
import i10 from '../images/i10.jpg';

//declare products_details array for each 10 produts
const products_details = [
    {
        id: 1,
        title: 'Product 1',
        description: 'This is a short description of Product 1.',
        price: 10.00,
        imageUrl: i1,
        colors: ['Red', 'Blue', 'Green']
    },
    {
        id: 2,
        title: 'Product 2',
        description: 'This is a short description of Product 2.',
        price: 20.00,
        imageUrl: i2,
        colors: ['Red', 'Blue', 'Green'],
    },
    {
        id: 3,
        title: 'Product 3',
        description: 'This is a short description of Product 3.',
        price: 30.00,
        imageUrl: i3,
        colors: ['Red', 'Blue', 'Green'],
    },
    {
        id: 4,
        title: 'Product 4',
        description: 'This is a short description of Product 4.',
        price: 40.00,
        imageUrl: i4,
        colors: ['Red', 'Blue', 'Green'],
    },
    {
        id: 5,
        title: 'Product 5',
        description: 'This is a short description of Product 5.',
        price: 50.00,
        imageUrl: i5,
        colors: ['Red', 'Blue', 'Green'],
    },
    {
        id: 6,
        title: 'Product 6',
        description: 'This is a short description of Product 6.',
        price: 60.00,
        imageUrl: i6,
        colors: ['Red', 'Blue', 'Green'],
    },
    {
        id: 7,
        title: 'Product 7',
        description: 'This is a short description of Product 7.',
        price: 70.00,
        imageUrl: i7,
        colors: ['Red', 'Blue', 'Green'],
    },
    {
        id: 8,
        title: 'Product 8',
        description: 'This is a short description of Product 8.',
        price: 80.00,
        imageUrl: i8,
        colors: ['Red', 'Blue', 'Green'],
    },
    {
        id: 9,
        title: 'Product 9',
        description: 'This is a short description of Product 9.',
        price: 90.00,
        imageUrl: i9,
        colors: ['Red', 'Blue', 'Green'],
    },
    {
        id: 10,
        title: 'Product 10',
        description: 'This is a short description of Product 10.',
        price: 100.00,
        imageUrl: i10,
        colors: ['Red', 'Blue', 'Green'],
    }
];

//by using useState and reduce method on array ,display Dropdown Button to each prouct
const Products = ({ updateTotalPrice }) => {
    const [selectedColors, setSelectedColors] = React.useState(
        products_details.reduce((acc, product) => {
            acc[product.id] = 'Dropdown Button';
            return acc;
        }, {})
    );

    //handleSelect function to handle dropdown value selection change. all other product's button's text will remain same except the one which selected
    const handleSelect = (productId, color) => {
        setSelectedColors({
            ...selectedColors,
            [productId]: color,
        });
    };

    //handleBuy function to handle buy button click event and set updateTotalPrice
    const handleBuy = (price) => {
        updateTotalPrice(price);
    };
    
//main return to dynamically render all 10 images, dropdown and buy button event click using bootstrap components
    return (
        <Container className="mt-5">
            <Row>
                {products_details.map((product) => (
                    <Col key={product.id} sm={12} md={4} lg={3} className="mb-4">
                        <Card className="h-70">
                            <Card.Img variant="top" src={product.imageUrl} className="product-image" />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Card.Text><strong>£{product.price}</strong></Card.Text>
                                <Dropdown onSelect={(eventKey) => handleSelect(product.id, eventKey)}>
                                    <Dropdown.Toggle variant="secondary" id={`dropdown-${product.id}`}>
                                        {selectedColors[product.id]}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {product.colors.map((color) => (
                                            <Dropdown.Item key={color} eventKey={color}>
                                                {color}
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant="primary" className='w-100 mt-2' onClick={() => handleBuy(product.price)}>Buy</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Products;
