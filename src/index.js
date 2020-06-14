import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/vendor/nucleo/css/nucleo.css';
import './assets/scss/argon-design-system-react.scss';

import App from './App';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
