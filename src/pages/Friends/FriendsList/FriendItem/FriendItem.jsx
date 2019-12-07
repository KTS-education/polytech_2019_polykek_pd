import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FriendItem.css';
import Avatar from 'components/shared/Avatar';
import Button from 'components/shared/Button/Button';

class FriendItem extends Component {
  static propTypes = {
    profile: PropTypes.object.isRequired,
  };

  render() {
    const { profile } = this.props;
    return (
      <div>
        <div className="FriendItem__box">
          <div className="FriendItem__avatar">
            <Avatar img={profile.photo_200_orig} md />
          </div>
          <div className="FriendItem__info">
            <div className="FriendItem__name-box">
              <span className="FriendItem__name">{`${profile.first_name} ${profile.last_name}`}</span>
            </div>
            <Button>Узнать что подарить</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default FriendItem;
