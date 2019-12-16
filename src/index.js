import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vk-connect';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import 'api';
import initStore from './state';

import App from './pages/App';

import './styles/main.scss';

const store = initStore();
connect.send('VKWebAppInit', {});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
