import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App/App';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


const mathReducer = (state = [], action) => {
  if(action.type === "SET_HISTORY"){
    console.log('In math reducer');
    return action.payload;
  }
  return state;
}

const store = createStore(
  combineReducers({
    mathReducer,
  })
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);