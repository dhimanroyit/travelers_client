import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import axios from 'axios';

axios.defaults.baseURL = 'https://murmuring-taiga-89127.herokuapp.com';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
