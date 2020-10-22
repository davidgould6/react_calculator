// Requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const calculatorRouter = require('./routes/calculator.router');

// Global
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route
app.use('/calculator', calculatorRouter);

app.listen(port, function () {
  console.log('Listening on port: ', port);
});