import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App/App';
import * as servicWorker from './serviceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const answerReducer = (state = [], action) => {
  if(action.type === 'SET_ANSWER'){
    console.log('In answer Reducer');
    return action.payload;
  }
  return state;
}

const historyReducer = (state = [], action) => {
  if(action.type === 'SET_HISTORY'){
    console.log('In history Reducer');
    return action.payload;
  }
  return state;
}

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