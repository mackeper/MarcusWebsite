import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../header/header';
import Description from './description';
import Demo from './demo';

import store from '../store';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
    };
  }
  
  descriptions = [
    {
      heading:"Marcus Östling",
      preamble:"My personal website",
      body:"This is my website where I show want I've done!",
      demo:"../../images/demo1.jpg",
    },
    {
      heading:"Nejbor",
      preamble:"Co-founder of the startup",
      body:"Co-founder and currently working for the startup Nejbor.",
      demo:"../../images/nejbor.jpg",
    },
    {
      heading:"Game Development",
      preamble:"Hobby games done in unity",
      body:"Hobby games done in unity",
      demo:"../../images/demo1.jpg",
    },
    {
      heading:"Nejbor",
      preamble:"Co-founder of the startup",
      body:"Co-founder and currently working for the startup Nejbor.",
      demo:"../../images/demo1.jpg",
    },
  ];

  genDesc = (description) => {
    return (
      <Description
        heading={description.heading}
        preamble={description.preamble}
        body={description.body}
      />
    );
  }

  genDemo = (description) => {
    return (
      <Demo
        demo={description.demo}
      />
    );
  }

  changePage = (page) => {
    console.log(page);
    console.log(this.descriptions.length);
    if(0 <= page && page < this.descriptions.length ) {
      this.setState({currentPage: page,});
    }
  }

  /**
   * Subscribe to the store and update currentPage
   */
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.changePage(store.getState().page.currentPage);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {

    return (
      <div className="App">
        <div className="maincontainer">
        <Header />
        {this.genDesc(this.descriptions[this.state.currentPage])}
        {this.genDemo(this.descriptions[this.state.currentPage])}
        </div>
      </div>
    );
  }
}

export default App;
