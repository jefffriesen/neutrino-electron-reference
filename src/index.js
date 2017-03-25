import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {Provider} from 'mobx-react';
import 'bootstrap/dist/css/bootstrap.css';
import './shared/global.css';

// Import any stores from features and add it to <Provider />
import store from './store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
