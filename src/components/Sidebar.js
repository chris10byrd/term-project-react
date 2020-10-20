import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <h1 className='main-title'>Online</h1>
                <form action="">
                    <input type="text" name="search-bar" id="search-bar" placeholder='Search for an item here..' />
                </form>
                <ul className="nav-links">
                    <li>All Books</li>
                    <li>About</li>
                    <li>Profile</li>
                    <li>Contact</li>
                </ul>
                <footer>Cppyright &copy; 2020</footer>
            </div>
        );
    }
}

export default Sidebar;