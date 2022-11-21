import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';

import App from './App';
import Store from './redux/store/store';

let store = Store();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);