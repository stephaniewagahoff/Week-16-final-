import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../MainNav.css';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

// Main navigation menu at the top of all pages. Contains NavLinks wrapped in a LinkContainer so the router can redirect to pages
export const MainNav = (props) => {
  return (
    <div id='mainnav'>
      <Nav>
        <Nav.Item>
          <LinkContainer to={'/'}>
            <Nav.Link >Home</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to={'/products'}>
            <Nav.Link>Products</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to={'/contact'}>
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav.Item>        
      </Nav>
    </div>
  )
}