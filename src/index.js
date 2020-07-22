import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import 'bootstrap';
import styles from './client/scss/application.scss';

render(<App />, document.getElementById('app'));
