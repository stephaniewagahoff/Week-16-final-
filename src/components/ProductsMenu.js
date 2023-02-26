import React from 'react';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';
import '../ProductsMenu.css';

// Builds the Product Menu
export const ProductsMenu = (props) => {
    const items = props.items;
    const categories = [];

    // Build category array from items passed to it
    items.forEach(item => {
        if(categories.findIndex(value => value === item.category) === -1)
            categories.push(item.category);
    })

    // Build the Nav Links from the category array
    const menuLinks = categories.map(category => {return <Nav.Link eventKey={category}>{category}</Nav.Link>});

    // Create Nav component and add Nav.Links
    return (
        <div id="productsmenu"> 
            <Nav className="flex-column" onSelect={(key) => {props.onClick(key)}}>
                { menuLinks }
            </Nav>
        </div>
        
    )
}