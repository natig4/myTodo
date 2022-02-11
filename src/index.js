import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
import './assets/styles/styles.scss';
import { store } from './store/store.js';
import App from './App';

Amplify.configure(awsExports);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
