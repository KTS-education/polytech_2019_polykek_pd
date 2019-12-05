/* eslint linebreak-style: ["error", "windows"] */
import React, { Component } from 'react';
import './FriendsList.css';
import PropTypes from 'prop-types';
import FriendItem from './FriendItem';
import Button from '../shared/Button/Button';
import Spinner from '../shared/Spinner';

class FriendsList extends Component {
  state = {
    loading: false,
  };

  static propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  loadMore = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, Math.round(300 + Math.random() * 1500));
  };

  render() {
    const { friends } = this.props;
    const { loading } = this.state;

    return (
      <div className="FriendsList__box">
        {friends.map((i) => (
          <div key={i} className="FriendsList__list">
            <FriendItem profile={i} />
          </div>
        ))}
        <div className="FriendsList__button">
          {(loading)
            ? (<Spinner />)
            : (
              <Button
                onClick={this.loadMore}
                width={130}
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
