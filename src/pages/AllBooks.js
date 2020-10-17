import React, { Component } from 'react';
import BookList from '../components/BookList';

class AllBooks extends Component {
    render() {
        return (
            <div className="all-books">
                <BookList title='Featured Books' />
                <BookList title='Top Sellers' />
            </div>

        );
    }
}

export default AllBooks;