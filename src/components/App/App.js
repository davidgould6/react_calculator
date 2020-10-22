import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render(){
    return(
      <div className="calculatorContainer">
        <input placeholder="this is where the input is"/>
        <div className="keyRow">
          <button className="keypadBtn">7</button>
          <button className="keypadBtn">8</button>
          <button className="keypadBtn">9</button>
          <button className="operatorBtn">X</button>
        </div>
        <div className="keyRow">
          <button className="keypadBtn">4</button>
          <button className="keypadBtn">5</button>
          <button className="keypadBtn">6</button>
          <button className="operatorBtn">-</button>
        </div>
        <div className="keyRow">
          <button className="keypadBtn">1</button>
          <button className="keypadBtn">2</button>
          <button className="keypadBtn">3</button>
          <button className="operatorBtn">+</button>
        </div>
        <div className="keyRow">
          <button className="keypadBtn">0</button>
          <button className="keypadBtn">.</button>
          <button className="keypadBtn">=</button>
          <button className="operatorBtn">/</button>
        </div>
        <button>Clear</button>
      </div>
    )
  }
}

export default App;