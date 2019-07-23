import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// links react and redux; gives us access to our store in any component
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from './reducers/index'

let store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
