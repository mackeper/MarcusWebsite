import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
//import { login } from '../../actions/authactions';

import './page.scss';


class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="Page">
        Page
      </div>
    );
  }
}

Page.propTypes = {

};

export default connect(null, { })(Page);