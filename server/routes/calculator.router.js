const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Function checks equation and if operator matches will run that that arithmetic and send query to database with sanitization.
runExpression = (expression) => {
    // Declerations
    let answer;
    let firstNumber = Number(expression.firstNumber);
    let operator = expression.operator;
    let secondNumber = Number(expression.secondNumber);
    
    const queryText = `
    INSERT INTO "calculator_data" ("first_number", "operator", "second_number", "answer")
    VALUES ($1, $2, $3, $4)`

    // Handle Addition
    if(operator === '+'){
      answer = firstNumber + secondNumber;
      console.log(answer);
      pool.query(queryText, [firstNumber, operator, secondNumber, answer])
    }
    // Handle Subtraction
    else if(operator === '-'){
      answer = firstNumber - secondNumber;
      console.log(answer);      
      pool.query(queryText, [firstNumber, operator, secondNumber, answer])
    }
    // Handle Division
    else if(operator === '/'){
      answer = firstNumber / secondNumber;
      console.log(answer);
      pool.query(queryText, [firstNumber, operator, secondNumber, answer])
    }
    // Handle Multiplication
    else if(operator === 'X'){
      answer = firstNumber * secondNumber;
      console.log(answer);
      pool.query(queryText, [firstNumber, operator, secondNumber, answer])
    }
    else{
      console.log('Houston we have a problem');
    }
}

router.get('/', (req, res) => {
  let queryText = `
  SELECT * FROM "calculator_data" ORDER BY "id" DESC LIMIT 10;`;
  pool.query(queryText)
  .then(result => {
    // Sends data from db from query in seq 48.
    res.send(result.rows);
  })
  .catch(error => {
    console.log('We have an error', error);
  });
});

router.post('/', (req, res) => {
  console.log('this is req.body', req.body);
  // Runs function to calculate expression and send query to DB.
  runExpression(req.body);
  // Sends status OK to client.
  res.sendStatus(200);
});

module.exports = router;