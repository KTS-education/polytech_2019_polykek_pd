import React, { Component } from 'react';
import connect from '@vkontakte/vk-connect';
import MainContext from 'pages/MainContext';
import Button from 'components/shared/Button/Button';
import Spinner from 'components/shared/Spinner';
import FriendItem from './FriendItem';

import './FriendsList.scss';

class FriendsList extends Component {
    state = {
      isLoading: true,
      allLoaded: false,
      friends: [],
      nowLoaded: 0,
    };

    componentDidMount() {
      const { token } = this.context;
      console.log('token', token);
      this.loadMore();
    }

    loadMore = () => {
      const { token } = this.context;
      const { friends } = this.state;
      this.setState({ isLoading: true });
      connect.sendPromise('VKWebAppCallAPIMethod',
        {
          method: 'friends.get',
          request_id: '32test',
          params: {
            order: 'hints',
            count: 30,
            fields: 'nickname,domain,sex,bdate,city,country,timezone,photo_200_orig',
            v: '5.103',
            access_token: token.access_token,
            offset: friends.length,
          },
        }).then((response) => {
        const nowLoadedFriends = [...friends, ...response.response.items];
        this.setState({
          friends: nowLoadedFriends,
          isLoading: false,
        });
        if (response.response.count === nowLoadedFriends.length) {
          this.setState({ allLoaded: true });
        }

        return true;
      })
        .catch((error) => console.error(error));
    };

    static contextType = MainContext;

    render() {
      const { isLoading, friends, allLoaded } = this.state;

      return (
        <div className="FriendsList__box">
          {(friends)
            ? friends.map((friend) => (
              <div key={friend.id} className="FriendsList__list">
                <FriendItem profile={friend} />
              </div>
            ))
            : (
              // TODO: СДЕЛАТЬ СТИЛИ
              <div>
                Не найдены
              </div>
            )}
          {(!allLoaded) && (
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
          )}
        </div>
      );
    }
}

export default FriendsList;
