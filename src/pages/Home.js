import React, { Component } from 'react';

import Book from '../components/Book'
import SideBar from '../components/Sidebar'
import AllBooks from './AllBooks';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <aside>
                    <SideBar />
                </aside>
                <div className="page-content">
                    <h1>Bookstore System</h1>
                    <AllBooks />
                </div>
            </div>
        );
    }
}

export default Home;