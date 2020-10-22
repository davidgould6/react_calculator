import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App/App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// Reducer listens for 'SET_ANSWER' and returns that answer else returns state which is an empty array.
const answerReducer = (state = [], action) => {
  if(action.type === 'SET_ANSWER'){
    return action.payload;
  }
  return state;
}

// Reducer listens for 'SET_HISTORY' and returns 10 most recent solutions else returns empty array. 
const historyReducer = (state = [], action) => {
  if(action.type === 'SET_HISTORY'){
    return action.payload;
  }
  return state;
}

// Created store with combine reducers. 
const store = createStore(
  combineReducers({
    historyReducer,
    answerReducer
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

serviceWorker.unregister();