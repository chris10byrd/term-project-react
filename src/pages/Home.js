import React, { Component } from 'react';

import SideBar from '../components/Sidebar';
import TopBar from '../components/TopBar'
import AllBooks from './AllBooks';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <SideBar />
                <div className="page-content">
                    <TopBar />
                    <AllBooks />
                </div>
            </div>
        );
    }
}

export default Home;