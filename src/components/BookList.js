import React, { Component } from 'react';
import Book from './Book';

class BookList extends Component {
    render() {
        return (
            <div className='book-list-page'>
                <h2 className='list-title'>{this.props.title}</h2>
                <ul className="book-list">
                    <li><Book buttonTxt='Add to Cart' /></li>
                    <li><Book buttonTxt='Add to Cart' /></li>
                    <li><Book buttonTxt='Add to Cart' /></li>
                    <li><Book buttonTxt='Add to Cart' /></li>
                    <li><Book buttonTxt='Add to Cart' /></li>
                    <li><Book buttonTxt='Add to Cart' /></li>
                    <li><Book buttonTxt='Add to Cart' /></li>
                </ul>
            </div>
        );
    }
}

export default BookList;