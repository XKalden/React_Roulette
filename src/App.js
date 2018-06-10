import React, { Component } from 'react';

import './App.css';

import Calculator from './componets/calculator/calculator';
import Display from './componets/display/display';



class App extends Component {
  render() {
    return (
      <div className="App">

        <Calculator/>

        <Display />




      </div>
    );
  }
}

export default App;
