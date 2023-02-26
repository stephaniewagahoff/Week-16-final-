import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { MainNav } from './MainNav';
import { FeaturedProducts } from './FeaturedProducts';
import storefront from '../resources/storefront.jpg';

// Displays the Home page which consists of the main navigation bar, a storefront image and text and a featured products carousel
export const Home = (props) => {
    return (
        <div id='Home'>
            <MainNav />
            <br></br>
            <Container fluid>
                <Row>
                    <Col sm="5">
                        <Image fluid rounded src={storefront} />
                    </Col>
                    <Col sm="7">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col></Col>
                    <Col sm="6">
                        <h3><center>Feature Products!</center></h3>
                        <FeaturedProducts />
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}