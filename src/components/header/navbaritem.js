import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { changePage } from '../../actions/pageactions';

import './navbar.scss';

const Navbaritem = (props) => {
        const onClickNavitem = () => {
            props.changePage(props.page);
        }

        return (
            <div onClick={onClickNavitem} className="Navbaritem">
                {props.text}
            </div>
        );
}

Navbaritem.propTypes = {
    page: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    changePage: PropTypes.func.isRequired,
};

export default connect(null, { changePage })(Navbaritem);