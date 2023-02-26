import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import featuredimage1 from '../resources/featured-1.jpg';
import featuredimage2 from '../resources/featured-2.jpg';
import featuredimage3 from '../resources/featured-3.jpg';

// Simple carousel used for displaying featured items
export const FeaturedProducts = (props) => {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <Image fluid className="center d-block" style={{height: 300}} src={featuredimage1} alt="Featured 1"/>
            </Carousel.Item>
            <Carousel.Item>
                <Image fluid className="center d-block" style={{height: 300}} src={featuredimage2} alt="Featured 2"/>
            </Carousel.Item>
            <Carousel.Item>
                <Image fluid className="center d-block" style={{height: 300}} src={featuredimage3} alt="Featured 3"/>
            </Carousel.Item>
        </Carousel>
    )
}