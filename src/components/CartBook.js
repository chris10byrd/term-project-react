import React, { Component } from 'react';

import BookImg from '../res/BookImg.png';
import DeleteIcon from '../res/delete-icon.svg'

class CartBook extends Component {
    render() {
        return (
            <div className='cart-item'>
                <div className="cart-book-container">
                    <div className="img-container">
                        <img src={BookImg} alt="book" />
                    </div>
                    <div className="cart-item-details">
                        <h3 className="book-title">Book Title</h3>
                        <p className="author">Author</p>
                        <p className="price">$13.99</p>
                    </div>
                </div>
                <div className="cart-buttons">
                    <form action="">
                        <label htmlFor="quantity">QTY</label>
                        <input type="number" name="quantity" />
                    </form>
                    <img src={DeleteIcon} alt="" />
                </div>
            </div>
        );
    }
}

export default CartBook;