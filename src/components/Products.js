import React from 'react';
import { MainNav } from './MainNav';
import { ProductsMenu } from './ProductsMenu';
import { ProductList } from './ProductList';
import { NewProductForm } from './NewProductForm';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { itemAPI } from "../Api/DataAPI";
import '../App.css';

// Products page.  Displays the mainnav and displays the product menu, new product form and product list components
export default class Products extends React.Component {
    state = {
            items: itemAPI.getAllItems(),
            selectedCategory: ''
    };

    // Gets all items from the API
    getItems() {
        this.setState({items: itemAPI.getAllItems()});
    }
    
    // Passes API the new item and updates the items state property
    newItem(item) {
        itemAPI.newItem(item);
        this.getItems();
      }

    // Handles when the Product Menu is clicked, updates the selected category
    handleProductMenuClick = (value) => {
        this.setState({selectedCategory: value});
    }

    // Handles when a new product is created. Takes the information, creates the new item and 
    // passes it to the API. Then updates the items state property
    handleNewProductClick = (title, image, category, price) => {
        const newItem = {
            title: title,
            price: price,
            image: image,
            category: category
        }

        itemAPI.newItem(newItem);
        this.getItems();
    }

    // Handles when a product is deleted. Takes the products ID and passes it to the API
    handleDeleteProductClick = (itemID) => {
        itemAPI.deleteItem(itemID);
        this.getItems();
    }

    render() {
    return (
        <div id='Products'>
            <MainNav />
            <Container fluid id="nopad">
                <br />
                <Row>
                    <Col sm="8">
                        <NewProductForm onClick={this.handleNewProductClick}/>
                    </Col>
                </Row>
                <Row>
                    <Col sm="2">
                        <ProductsMenu items={this.state.items} onClick={this.handleProductMenuClick}/>
                    </Col>
                    <Col>
                        <ProductList items={this.state.items.filter(obj => obj.category === this.state.selectedCategory)} onClick={this.handleDeleteProductClick}/>
                    </Col> 
                </Row>
            </Container>
        </div>
    )
    }
}