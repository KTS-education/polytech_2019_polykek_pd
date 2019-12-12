import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import LinkText from 'components/shared/LinkText';
import ProfileLinkBlock from './ProfileLinkBlock';
import FriendsLinkBlock from './FriendsLinkBlock';
import './Header.scss';

class Index extends Component {
  static propTypes = {
    profile: PropTypes.object.isRequired,
    friends: PropTypes.array,
    link: PropTypes.objectOf(PropTypes.string),
    isFriends: PropTypes.bool,
    isLink: PropTypes.bool,
  };

  static defaultProps = {
    friends: [],
    link: { text: '', to: '#' },
    isFriends: false,
    isLink: false,
  };

  render() {
    const {
      profile, friends, link, isFriends, isLink,
    } = this.props;

    return (
      <div>
        <div className="Header__box">
          <div className="Header__Profile">
            <ProfileLinkBlock profile={profile} />
          </div>
          {isLink && (
            <div className="Header__link">
              <LinkText to={link.to}>{link.text}</LinkText>
            </div>
          )}
          {isFriends && (
            <div className="Header__friends">
              <FriendsLinkBlock friends={friends} />
            </div>
          )}

        </div>
      </div>
    );
  }
}

export default withRouter(Index);
