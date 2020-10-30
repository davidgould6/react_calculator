## About this application
This is a basic calculator that will calculate mathematical equations. The data passed to the calculator is stored on the client side and sent to the server side where the expression is run. After the expression is run a query is sent to the database that contains the first number, operator, second number, and the answer. The last 10 equations are displayed on the dom as well as the answer. These are received via GET from axios then passed to redux and stored in a reducer where the component has access to that data.
The application has built in conditionals to prevent certain errors for example only one decimal is allowed in each number, a first or second number can not be added, subtracted, divided, or multiplied by a decimal itself. Only one zero is allowed prior to a decimal as the first number.

This application was created with JavaScript, React.js, Node.js, Express.js, React-Redux, PG, Axios, HTML, && CSS.

## Deployed application
You can find the deployed application at https://rocky-plateau-43532.herokuapp.com/
