import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Title from './title';
import Navbar from './navbar';

import './header.scss';

const Header = props => {
        return (
            <div className="Header">
               <Title/>
               <Navbar/>
            </div>
        );
}

export default Header;
