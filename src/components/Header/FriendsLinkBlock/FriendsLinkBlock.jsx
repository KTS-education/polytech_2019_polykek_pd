import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FriendsLinkBlock.css';

import LinkText from 'components/shared/LinkText';
import Avatar from 'components/shared/Avatar';

class FriendsLinkBlock extends Component {
  static propTypes = {
    friends: PropTypes.array.isRequired,
  };

  render() {
    const { friends } = this.props;

    return (
      <div className="FriendsLinkBlock__box">
        <LinkText>Мои друзья</LinkText>
        <ul className="FriendsLinkBlock__avatars">
          {friends.slice(0, 3).map((i) => (
            <li key={i.id} className="FriendsLinkBlock__avatar">
              <Avatar img={i.photo_100} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FriendsLinkBlock;
