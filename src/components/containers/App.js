import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../header/header';
import Description from './description';
import Demo from './demo';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
    };
  }

  genDesc = (description) => {
    return (
      <Description
        heading={description.heading}
        preable={description.preable}
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

  render() {
    const descriptions = [
      {
        heading:"Marcus Östling",
        preamble:"My personal website",
        body:"This is my website where I show want I've done!",
        demo:"../../images/demo1.jpg",
      },
      {
        heading:"Nejbor",
        preamble:"Co-founder to the startup",
        body:"I'm the co-founder and currently working for the startup Nejbor.",
        demo:"../../images/demo1.jpg",
      },
    ];

    return (
      <div className="App">
        <div className="maincontainer">
        <Header />
        {this.genDesc(descriptions[0])}
        {this.genDemo(descriptions[0])}
        </div>
      </div>
    );
  }
}

export default App;
