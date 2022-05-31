import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'mobx-react';
import STORES from './state/registration';

ReactDOM.render(
  <Provider {...STORES}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
