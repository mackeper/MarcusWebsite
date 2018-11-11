import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Title from './title';
import Navbar from './navbar';

import './header.scss';

class Header extends Component {
    render() {
        return (
            <div className="Header">
               <Title/> <Navbar/>
            </div>
        );
    }
}

export default Header;
