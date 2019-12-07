import React, { Component } from 'react';
import connect from '@vkontakte/vk-connect';
import MainContext from 'pages/MainContext';
import Button from 'components/shared/Button/Button';
import Spinner from 'components/shared/Spinner';
import FriendItem from './FriendItem';

import './FriendsList.css';

class FriendsList extends Component {
  state = {
    isLoading: true,
    friends: [],
  };

  componentDidMount() {
    const { token } = this.context;
    console.log('token', token);
    connect.sendPromise('VKWebAppCallAPIMethod',
      {
        method: 'friends.get',
        request_id: '32test',
        params: {
          order: 'hints',
          count: 15,
          fields: 'nickname,domain,sex,bdate,city,country,timezone,photo_200_orig',
          v: '5.103',
          access_token: token.access_token,
        },
      }).then((response) => this.setState({ friends: response.response.items, isLoading: false }))
      .catch((error) => console.error(error));
  }

  loadMore = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, Math.round(300 + Math.random() * 1500));
  };

  static contextType = MainContext;

  render() {
    const { isLoading, friends } = this.state;

    return (
      <div className="FriendsList__box">
        {(friends)
          ? friends.map((friend) => (
            <div key={friend.id} className="FriendsList__list">
              <FriendItem profile={friend} />
            </div>
          ))
          : (
            ''
          )}
        <div className="FriendsList__button">
          {(isLoading)
            ? (<Spinner />)
            : (
              <Button
                onClick={this.loadMore}
                secondary
              >
                Показать ещё
              </Button>
            )}
        </div>
      </div>
    );
  }
}

export default FriendsList;
