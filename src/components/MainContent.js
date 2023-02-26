import React from 'react';
import { Link } from 'react-router-dom';
import { itemAPI } from "../Api/DataAPI";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

export class MainContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }
    
    componentDidMount() {
        this.getItems();
    }
    
    getItems() {
        this.setState({items: itemAPI.getAllItems()});
    }
    
    updateItem(item) {
        itemAPI.updateItem(item);
        this.getItems();
    }

    render() {
        return (
            <Container>
                <Row>
                    <ButtonGroup>
                        <Link to={'/'}><Button variant="dark">Home</Button></Link>
                        <Link to={'/products'}><Button variant="dark">Products</Button></Link>
                        <Link to={'/Contact'}><Button variant="dark">Contact</Button></Link>
                    </ButtonGroup>     
                 </Row>
            </Container>
        )
    }
}