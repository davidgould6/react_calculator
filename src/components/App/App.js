import React, { Component } from 'react';

import './App.css';

class App extends Component {

  // Local state to hold data of mathematic expression
  state = {
    firstNumber: '',
    secondNumber: '',
    operator: '',
  }

  clearInput = () => {
    console.log('in clear Input on click');
    this.setState({
      firstNumber: '',
      secondNumber: '',
      operator: '',
    });
  }

  render(){
    return(
      <div className="app">
        <div className="calculatorContainer">
          <input className="calculatorInput" placeholder="this is where the input is"/>
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
          <button className="clearBtn" onClick={this.clearInput}>Clear</button>
        </div>
      </div>
    )
  }
}

export default App;