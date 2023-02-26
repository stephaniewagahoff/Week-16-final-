import React from 'react';
import { MainNav } from './MainNav';
import '../App.css';
import contactusimg from '../resources/contactusimg.jpg';
import wwwlogoimg from '../resources/wwwlogo.png';
import facebooklogoimg from '../resources/facebooklogo.png';
import twitterlogoimg from '../resources/twitterlogo.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

// Displays a page with contact information, consists of contactus image, address and phone number and links to social media pages
export const Contact = (props) => {
    return (
        <div id='Contact'>
            <MainNav />
            <br />
            <Container fluid>
                <Row>
                    <Col sm="5">
                        <Image src={contactusimg}></Image>
                    </Col>
                    <Col>
                        <h5>1111 Road Street</h5>
                        <h5>Suite 104</h5>
                        <h5>City, State, 12345</h5>
                      
                        <h5>123-456-7890</h5>
                        <br />
                        <a href="https://www.google.com"><Image fluid roundedCircle src={wwwlogoimg} /></a>
                        <a href="https://www.facebook.com"><Image fluid roundedCircle src={facebooklogoimg} /></a>
                        <a href="https://www.twitter.com"><Image fluid roundedCircle src={twitterlogoimg} /></a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}