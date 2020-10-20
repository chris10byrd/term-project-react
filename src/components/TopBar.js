import React, { Component } from 'react';

import Cart from './Cart'

class TopBar extends Component {
    render() {
        return (
            <div className="top-bar">
                <h1 className="main-title">Bookstore System</h1>
                <ul className="top-buttons">
                    <Cart />
                </ul>
            </div>
        );
    }
}

export default TopBar;