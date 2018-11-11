import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './demo.scss';

const Demo = props => {
        return (
            <div className="Demo">
              <img src={props.demo}/>
            </div>    
            );
}

Demo.propTypes = {
  demo:PropTypes.string,
};

export default Demo;