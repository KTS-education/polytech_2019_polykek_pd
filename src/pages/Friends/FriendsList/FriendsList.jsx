import React, { Component } from 'react';
import connect from '@vkontakte/vk-connect';
import PropTypes from 'prop-types';
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

    filter: '',
  };

  static propTypes = {
    filter: PropTypes.string,
  };

  static defaultProps = {
    filter: '',
  };

  componentDidMount() {
    this.loadMore();
  }

  shouldComponentUpdate(nextProps) {
    // eslint-disable-next-line react/destructuring-assignment
    if (nextProps.filter !== this.props.filter && nextProps.filter !== '') {
      this.loadMore(nextProps.filter);
    }

    // eslint-disable-next-line react/destructuring-assignment
    if (nextProps.filter !== this.props.filter && nextProps.filter === '') this.loadMore();

    return true;
  }

  loadMore = (filter) => {
    const { token, profile } = this.context;
    this.setState({ isLoading: true });

    if (typeof filter === 'string') {
      connect.sendPromise('VKWebAppCallAPIMethod',
        {
          method: 'friends.search',
          params: {
            user_id: profile.id,
            q: filter,
            count: 30,
            fields: 'nickname,domain,sex,bdate,city,country,timezone,photo_200_orig',
            v: '5.103',
            access_token: token.access_token,
            offset: 0,
          },
        }).then((response) => {
        const nowLoadedFriends = [...response.response.items];
        this.setState({
          friends: nowLoadedFriends,
          isLoading: false,
        });
        if (response.response.count === nowLoadedFriends.length) {
          this.setState({ filterAllLoaded: true });
        }
        return true;
      })
        .catch((error) => console.error(error));
    } else {
      const { friends } = this.state;
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
            offset: (friends.length > 29) ? friends.length : 0,
          },
        }).then((response) => {
        const nowLoadedFriends = (friends.length > 29)
          ? [...friends, ...response.response.items] : [...response.response.items];
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
    }
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
