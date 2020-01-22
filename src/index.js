import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { carReducer } from './reducers/carReducer';

const store = createStore(carReducer);
console.log(store.getState());

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
  );
