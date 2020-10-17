import React, { Component } from 'react';

import BookImg from '../res/BookImg.png'

class Book extends Component {
    render() {
        return (
            <div className="book-container">
                <div className="img-container">
                    <img src={BookImg} alt="book" />
                    <div className="img-cover">
                        <button className="add-cart">Add to Cart</button>
                    </div>
                </div>
                <h3 className="book-title">Book Title</h3>
                <p className="author">Author</p>
                <p className="price">$13.99</p>
            </div>
        );
    }
}

export default Book;