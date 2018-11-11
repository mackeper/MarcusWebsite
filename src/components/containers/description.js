import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './description.scss';

const Description = props => {
        return (
            <div className="Description">
                <h1>{props.heading}</h1>
                <h2>{props.preamble}</h2>
                <p>{props.body}</p>
            </div>    
          );
}

Description.propTypes = {
  heading:PropTypes.string,
  preamble:PropTypes.string,
  body:PropTypes.string,
  demo:PropTypes.string,
};

export default Description;