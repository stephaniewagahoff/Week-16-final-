import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';

// Creates a form for creating new products
export const NewProductForm = (props) => {

    // Uses state to keep form data
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");

    // Handle methods for form data
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleImageChange = (event) => {
        setImage(event.target.value);
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    }

    // Method for submit, calls the onClick passed through props and clears the form
    const onSubmit = (event) => {
        props.onClick(title, image, category, price);
        setTitle('');
        setImage('');
        setCategory('');
        setPrice('');
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        Enter New Item:
                    </Col>
                </Row>
                <Row>
                    <Col sm="2">
                        <Form.Control size="sm" type="text" value={title} onChange={handleTitleChange} placeholder='Title' />
                    </Col>
                    <Col sm="2">
                        <Form.Control size="sm" type="text" value={category} onChange={handleCategoryChange} placeholder='Category' />
                    </Col>
                    <Col sm="4">
                        <Form.Control size="sm" type="file" value={image} onChange={handleImageChange} placeholder='Image' />
                    </Col>
                    <Col sm="2">
                        <Form.Control size="sm" type="text" value={price} onChange={handlePriceChange} placeholder='Price' />
                    </Col>
                    <Col>
                        <Button size="sm" variant="dark" onClick={onSubmit}>Submit</Button>
                    </Col>
                </Row>
                <br />
            </Container>
        </div>
    )
}