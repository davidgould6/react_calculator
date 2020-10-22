import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import axios
import axios from 'axios';

// Import css
import './App.css';

class App extends Component {

  componentDidMount(){
    this.getAnswers();
  }

  // Local state to hold data of mathematic expression
  state = {
    input: '',
    firstNumber: '',
    secondNumber: '',
    operator: '',
  };

  // Function checks if input is an empty string if it is than unable to add zero, if it is not empty string will add zero to input.
  addZeroToInput = value => {
    if(this.state.input !== ""){
      this.setState({
        input: this.state.input + value
      });
    };
  };

  // Function uses indexOf function to search for string in this case input property if there is a decimal only allowing one decimal
  addDecimalToInput = value => {
    if(this.state.input.indexOf(".") === -1){
      this.setState({
        input: this.state.input + value
      });
    }
  }

  // Function sets state back to empty strings "clearing"
  clearInput = () => {
    console.log('in clear Input on click');
    this.setState({
      input: '',
      firstNumber: '',
      secondNumber: '',
      operator: '',
    });
  };

  // Function makes a get request to server to get all answers
  getAnswers = () => {
    axios({
      method: 'GET',
      url: '/calculator'
    })
    .then(response => {
      console.log('this is the response from the server', response);
      this.props.dispatch({
        type: "SET_HISTORY",
        payload: response.data
      });
    })
    .catch(error => {
      console.log('We have an error', error);
    });
  };

  // Function uses spread operator sets state of firstNumber to what previous value in input was, clears input, and sets operator to the value
  // but is only for operator functions (+, -, X, /)
  setOperator = value => {
    this.setState({
      ...this.state,
      firstNumber: this.state.input,
      input: '',
      operator: value
    });
  };

  // Function is given to the "=" button sets the secondNumber property to what is in the current input property creates object conaining expression data to send
  // to server via axios post. Then sets values back to empty strings.
  sendExpression = () => {
    this.setState({
      secondNumber: this.state.input,
      input: '',
    });

    const expressionToCalculate = {
      firstNumber: this.state.firstNumber,
      operator: this.state.operator,
      secondNumber: this.state.input
    }

    axios({
      method: 'POST',
      url: '/calculator',
      data: expressionToCalculate
    });

    this.setState({
      input: '',
      firstNumber: '',
      secondNumber: '',
      operator: '',
    });
  };

  // Function uses spread operator to set the input to the previous value + the new value to concatenate.
  toInput = value => {
    this.setState({
      input: this.state.input + value
    });
  };

  render(){
    console.log('this is state', this.state);
    console.log('these are our props', this.props);
    return(
      <div className="app">
        <div className="calculatorContainer">
          <input className="calculatorInput" placeholder={this.state.input}/>
          <div className="keyRow">
            <button className="keypadBtn" name="7" onClick={(event) => this.toInput(event.target.name)}>7</button>
            <button className="keypadBtn" name="8" onClick={(event) => this.toInput(event.target.name)}>8</button>
            <button className="keypadBtn" name="9" onClick={(event) => this.toInput(event.target.name)}>9</button>
            <button className="operatorBtn" name="X" onClick={(event) => this.setOperator(event.target.name)}>X</button>
          </div>
          <div className="keyRow">
            <button className="keypadBtn" name="4" onClick={(event) => this.toInput(event.target.name)}>4</button>
            <button className="keypadBtn" name="5" onClick={(event) => this.toInput(event.target.name)}>5</button>
            <button className="keypadBtn" name="6" onClick={(event) => this.toInput(event.target.name)}>6</button>
            <button className="operatorBtn" name="-" onClick={(event) => this.setOperator(event.target.name)}>-</button>
          </div>
          <div className="keyRow">
            <button className="keypadBtn" name="1" onClick={(event) => this.toInput(event.target.name)}>1</button>
            <button className="keypadBtn" name="2" onClick={(event) => this.toInput(event.target.name)}>2</button>
            <button className="keypadBtn" name="3" onClick={(event) => this.toInput(event.target.name)}>3</button>
            <button className="operatorBtn" name="+" onClick={(event) => this.setOperator(event.target.name)}>+</button>
          </div>
          <div className="keyRow">
            <button className="keypadBtn" name="0" onClick={(event) => this.addZeroToInput(event.target.name)}>0</button>
            <button className="keypadBtn" name="." onClick={(event) => this.addDecimalToInput(event.target.name)}>.</button>
            <button className="keypadBtn" name="=" onClick={this.sendExpression}>=</button>
            <button className="operatorBtn" name="/" onClick={(event) => this.setOperator(event.target.name)}>/</button>
          </div>
          <button className="clearBtn" onClick={this.clearInput}>Clear</button>
        </div>
        <div className="calculatorAnswer">Here is your answer</div>
        <div className="calculatorHistory">Calculator History</div>
      </div>
    )
  }
}

const mapStoreToProps = reduxState => ({
  reduxState
})

export default connect(mapStoreToProps)(App);