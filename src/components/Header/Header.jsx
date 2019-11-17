import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinkText from 'components/shared/LinkText';
import ProfileLinkBlock from './ProfileLinkBlock';
import FriendsLinkBlock from './FriendsLinkBlock';
import './Header.css';

class Index extends Component {
  static propTypes = {
    profile: PropTypes.objectOf(PropTypes.string).isRequired,
    friends: PropTypes.arrayOf(PropTypes.string),
    link: PropTypes.string,
  };

  static defaultProps = {
    friends: [],
    link: '',
  };

  render() {
    const { profile, friends, link } = this.props;

    return (
      <div>
        <div className="Header__box">
          <div className="Header__Profile">
            <ProfileLinkBlock profile={profile} />
          </div>
          {(link)
            ? (
              <div className="Header__link">
                <LinkText>{link}</LinkText>
              </div>
            )
            : (
              <div className="Header__friends">
                <FriendsLinkBlock friends={friends} />
              </div>
            )}

        </div>
      </div>
    );
  }
}

export default Index;
