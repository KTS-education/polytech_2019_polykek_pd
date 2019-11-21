import React from 'react';
import connect from '@vkontakte/vk-connect';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './Main';

import './App.css';

import MainContext from './MainContext';


export default class App extends React.Component {
  state = {
    isLoading: true,
    profile: {},
    token: '',
    qwe: 'ewq',
    friends: [],
  };

  componentDidMount() {
    connect.send('VKWebAppInit', {});
    connect.sendPromise('VKWebAppGetAuthToken', { app_id: 7210429, scope: 'friends' })
      .then((response) => {
        this.setState({ token: response });
        console.log('auth', response);
        this.init();
        return { success: true };
      })
      .catch((error) => console.error('AppGetAuthToken', error));
  }

  init = () => {
    const { token } = this.state;
    console.log('Mounted');
    connect.sendPromise('VKWebAppGetUserInfo', {})
      .then((response) => this.setState({ profile: response }))
      .catch((e) => console.error(e));
    connect.sendPromise('VKWebAppCallAPIMethod',
      {
        method: 'friends.get',
        request_id: '32test',
        params: {
          order: 'random',
          count: 3,
          fields: 'nickname,domain,sex,bdate,city,country,timezone,photo_100',
          v: '5.103',
          access_token: token.access_token,
        },
      }).then((response) => this.setState({ friends: response.response.items, isLoading: false }))
      .catch((error) => console.error(error));
  };

  render() {
    const { isLoading } = this.state;
    return (
      <div className="Mainpending">
        <MainContext.Provider value={this.state}>
          {!isLoading && (
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Main} />
              </Switch>
            </BrowserRouter>
          )}
        </MainContext.Provider>
      </div>
    );
  }
}
