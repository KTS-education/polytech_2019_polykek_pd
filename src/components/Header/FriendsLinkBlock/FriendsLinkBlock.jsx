import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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

    const onButtonClick = () => {
      // eslint-disable-next-line react/prop-types
      const { history } = this.props;
      // eslint-disable-next-line react/prop-types
      history.push('/friends');
    };
    return (
      <div
        className="FriendsLinkBlock__box"
        onClick={onButtonClick}
        role="button"
        tabIndex={0}
      >
        <LinkText to="/friends">Мои друзья</LinkText>
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

export default withRouter(FriendsLinkBlock);
