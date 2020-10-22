import React, { Component } from 'react';

// Import axios
import axios from 'axios';

// Import css
import './App.css';

class App extends Component {

  // Local state to hold data of mathematic expression
  state = {
    input: '',
    firstNumber: '',
    secondNumber: '',
    operator: '',
  }

  toInput = value => {
    this.setState({
      input: this.state.input + value
    });
  }

  // Function sets state back to empty strings "clearing"
  clearInput = () => {
    console.log('in clear Input on click');
    this.setState({
      firstNumber: '',
      secondNumber: '',
      operator: '',
    });
  }

  render(){
    console.log('this is state', this.state);
    return(
      <div className="app">
        <div className="calculatorContainer">
          <input className="calculatorInput" placeholder="this is where the input is"/>
          <div className="keyRow">
            <button className="keypadBtn" name="7" onClick={(event) => this.toInput(event.target.name)}>7</button>
            <button className="keypadBtn" name="8" onClick={(event) => this.toInput(event.target.name)}>8</button>
            <button className="keypadBtn" name="9" onClick={(event) => this.toInput(event.target.name)}>9</button>
            <button className="operatorBtn" name="X" >X</button>
          </div>
          <div className="keyRow">
            <button className="keypadBtn" name="4" onClick={(event) => this.toInput(event.target.name)}>4</button>
            <button className="keypadBtn" name="5" onClick={(event) => this.toInput(event.target.name)}>5</button>
            <button className="keypadBtn" name="6" onClick={(event) => this.toInput(event.target.name)}>6</button>
            <button className="operatorBtn" name="-" >-</button>
          </div>
          <div className="keyRow">
            <button className="keypadBtn" name="1" onClick={(event) => this.toInput(event.target.name)}>1</button>
            <button className="keypadBtn" name="2" onClick={(event) => this.toInput(event.target.name)}>2</button>
            <button className="keypadBtn" name="3" onClick={(event) => this.toInput(event.target.name)}>3</button>
            <button className="operatorBtn" name="+">+</button>
          </div>
          <div className="keyRow">
            <button className="keypadBtn" name="0" onClick={(event) => this.toInput(event.target.name)}>0</button>
            <button className="keypadBtn" name="." onClick={(event) => this.toInput(event.target.name)}>.</button>
            <button className="keypadBtn" name="=" onClick={(event) => this.v(event.target.name)}>=</button>
            <button className="operatorBtn" name="/">/</button>
          </div>
          <button className="clearBtn" onClick={this.clearInput}>Clear</button>
        </div>
      </div>
    )
  }
}

export default App;