import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../ProductsList.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

// Creates Cards for eatch item to be displayed
export const ProductList = (props) => {
    const { items } = props;

    // Handles when the user deletes an item by calling the onClick passed through props
    const onDelete = (itemID) => {
        props.onClick(itemID);
    }

    // Build Card components
    const itemList = items.map((item) => {
        return <Col>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={`./images/img-1.jpg`} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>${item.price}</Card.Text>
                    <Button size="sm" variant="danger" onClick={() => onDelete(item.id)}>Delete</Button>
                </Card.Body>
            </Card>
        </Col>
    })

    return (
        <div>
            <Container fluid>
                <Row>
                    <CardGroup>
                        {itemList}
                    </CardGroup>
                </Row>
            </Container>
        </div>
    )
}