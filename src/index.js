import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import 'bootstrap';
import { BrowserRouter } from 'react-router-dom';
import styles from './client/scss/application.scss';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
