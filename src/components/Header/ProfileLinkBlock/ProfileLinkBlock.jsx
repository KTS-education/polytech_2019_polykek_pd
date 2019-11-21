import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../shared/Avatar';
import LinkText from '../../shared/LinkText';
import './ProfileLinkBlock.css';

class ProfileLinkBlock extends Component {
  static propTypes = {
    profile: PropTypes.object.isRequired,
  };

  render() {
    const { profile } = this.props;

    const onClick = () => console.log('Click');

    return (
      <div onClick={onClick} role="button" tabIndex={0} className="ProfileLinkBlock__box">
        <div className="ProfileLinkBlock__avatar">
          <Avatar img={profile.photo_100} />
        </div>
        <div className="ProfileLinkBlock__text">
          <LinkText>
            {`${profile.first_name} ${profile.last_name}`}
          </LinkText>
        </div>
      </div>
    );
  }
}

export default ProfileLinkBlock;
