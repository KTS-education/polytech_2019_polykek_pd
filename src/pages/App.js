import React from 'react';
import connectVk from '@vkontakte/vk-connect';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Main from './Main';
import Spinner from '../components/shared/Spinner';
import Friends from './Friends';
import MyGifts from './My';

import AppConfig from '../config/AppConfig';
import MainContext from './MainContext';

import mapDispatchToProps from '../state/mapDispatchToProps';
import mapStateToProps from '../state/mapStateToProps';

import './App.scss';


class App extends React.Component {
  state = {
    isLoading: true,
    profile: {}, // TODO: удалить и перенести в редакс
    token: '', // TODO: Туда же
    friends: [],
  };

  componentDidMount() {
    connectVk.sendPromise('VKWebAppGetAuthToken', { app_id: AppConfig.app_id, scope: 'friends' })
      .then((response) => {
        this.setState({ token: response });
        this.init();
        return { success: true };
      })
      .catch((error) => console.error('AppGetAuthToken', error));
  }

  init = () => {
    const { token } = this.state;
    connectVk.sendPromise('VKWebAppGetUserInfo', {})
      .then((response) => {
        // eslint-disable-next-line react/prop-types
        const { setProfile } = this.props;
        this.setState({ profile: response });
        setProfile(response);
        return true;
      })
      .catch((e) => console.error(e));
    connectVk.sendPromise('VKWebAppCallAPIMethod',
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
    const combined = { ...this.state, ...this.props };
    return (
      <div className="Mainpending">
        {isLoading && (
          <div className="loading-spinner">
            <Spinner />
          </div>
        )}
        <MainContext.Provider value={combined}>
          {!isLoading && (
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/friends" component={Friends} />
                <Route exact path="/my" component={MyGifts} />
                <Route exact path="/mywishlist" component={MyGifts} />
              </Switch>
              {/* <LinkText to="/my">My list</LinkText> */}
            </BrowserRouter>
          )}
        </MainContext.Provider>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
