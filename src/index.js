import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {Provider} from 'mobx-react';
import 'bootstrap/dist/css/bootstrap.css';
import './shared/global.css';

import store from './store';
import {clockFeatureStore} from './clock-feature';

render(
  <Provider store={store} clockFeatureStore={clockFeatureStore}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
