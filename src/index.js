import React from 'react';
import ReactDOM from 'react-dom';
import 'api';

import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// eslint-disable-next-line import/no-named-as-default
import App from './pages/App';
import MyGifts from './pages/My';
import Friends from './pages/Friends';
import Main from './pages/Main';

import './styles/main.scss';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/giftss',
        component: MyGifts,
      },
      {
        path: '/friends',
        component: Friends,
      },
      {
        path: '/',
        extract: true,
        component: Main,
      },
    ],
  },
];
ReactDOM.render(
  <BrowserRouter>
    { renderRoutes(routes) }
  </BrowserRouter>, document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
