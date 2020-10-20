import React, { Component } from 'react';

import CartIcon from '../res/cart-img.svg'
import CartBook from './CartBook';

class Cart extends Component {
    render() {
        return (
            <div className='cart'>
                <img src={CartIcon} alt="" />
                <ul className='cart-list'>
                    <li className="cart-item">
                        <CartBook />
                    </li>
                    <li className="cart-item">
                        <CartBook />
                    </li>
                    <li className="cart-item">
                        <CartBook />
                    </li>
                </ul>
            </div>
        );
    }
}

export default Cart;