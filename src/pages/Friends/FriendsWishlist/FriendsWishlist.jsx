import React from 'react';
// import Header from 'components/Header/Header';
import Avatar from 'components/shared/Avatar';
// import connect from '@vkontakte/vk-connect';
import Title from 'components/shared/Title';

import './FriendsWishlist.css';

import ItemBox from '../../Main/ItemBox';
import MainContext from '../../MainContext';

class FriendsWishlist extends React.Component {
  state = {
    items: [],
    profile: {},
  };

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { match: { params: { id } } } = this.props;
    const { friends } = this.context;
    const profile = friends.filter((e) => e.id === +id)[0];
    this.setState({
      profile,
    });
  }

  static contextType = MainContext;

  render() {
    const { items, profile } = this.state;
    console.log(profile);
    return (
      <div className="myGifts">
        <div className="myGifts__info">
          <Avatar img={profile.photo_max_orig || profile.photo_100} lg />
          <div className="right">
            <Title>{`${profile.first_name} ${profile.last_name}`}</Title>
          </div>
        </div>
        <div className="myGifts__box">
          <ItemBox items={items} />
        </div>

      </div>

    );
  }
}

export default FriendsWishlist;
