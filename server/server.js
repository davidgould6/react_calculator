console.log('server');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Route includes
const calculatorRouter = require('./routes/calculator.router');

console.log('server1');


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log('server2');


/* Routes */
app.use('/calculator', calculatorRouter);

console.log('server3');


// Serve static files
app.use(express.static('build'));

console.log('server4');


// App Set
const PORT = process.env.PORT || 5000;

console.log('server4');


/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
