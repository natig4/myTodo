import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
import './assets/styles/styles.scss';
import App from './App';

Amplify.configure(awsExports);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>{' '}
  </React.StrictMode>,
  document.getElementById('root')
);
