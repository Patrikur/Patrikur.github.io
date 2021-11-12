import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../logo.png';

const Menu = () => {
    return (
        <div className="menu">
            <div className="logo">
                <img src={logo} className="logo" alt="logo" />
            </div>
            <ul className="menubar">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/shows'>TV Shows</Link></li>
                <li><Link to='/films'>Films</Link></li>
                <li><Link to='/mylist'>My List</Link></li>
            </ul>
        </div>
    )
};

export default Menu;