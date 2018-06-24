import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Page from '../pages/page';

import Header from '../header/header';

//Redux
import store from '../store';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    //this.state = { loggedin: store.getState().auth.loggedin };
  }


  /**
   *  Listen to wheather the user is logged in or not.
   */
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        //loggedin: store.getState().auth.loggedin
      })
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="App">
        <div className="pagecontainer">
          <Header />
          <Page />
        </div>
      </div>
    );
  }
}

export default App;
