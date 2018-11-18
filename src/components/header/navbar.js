import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Navbaritem from './navbaritem';

import './navbar.scss';



const Navbar = (props) => {
        const onClickNav = (page) => {
            console.log(page);
            props.changePage(page);
        }

        const items = [
            {text: "Marcus", page: 0},
            {text: "Nejbor", page: 1},
            {text: "Game development", page: 2},
            {text: "Bachelor thesis", page: 3},
        ]

        const testClick = () => {
            console.log("click");
        }

        const comps = items.map((item, index) => (
            <Navbaritem key={index} 
                text={item.text}
                page={item.page}>
                {item.text}
            </Navbaritem>
        ));

        return (
            <div className="Navbar">
                {comps}
            </div>
        );
}

Navbar.propTypes = {
    
};

export default Navbar;