import React from 'react';
// import Header from 'components/Header/Header';
import Avatar from 'components/shared/Avatar';
// import connect from '@vkontakte/vk-connect';
import Title from 'components/shared/Title';

import './FriendsWishlist.css';


import api from 'api';
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
    this.getItems();
  }

  getItems = () => {
    // eslint-disable-next-line react/prop-types
    const { profile } = this.state;
    // eslint-disable-next-line no-const-assign
    api('/api/user/friends', 'POST', {
      ids: [profile.id],
    }).then((result) => {
      console.log(result.response);
      // eslint-disable-next-line no-underscore-dangle
      const friendId = result.response.friends[1]._id;
      api('/api/wishlist/get', 'GET', {
        id: friendId,
      }).then((res) => {
        if (res.response) {
          this.setState({
            items: res.response.wishlist,
          });
        } else {
          console.error(res);
        }
        return null;
      }).catch((e) => console.error(e));

      return true;
    }).catch((e) => console.error(e));
  };

  static contextType = MainContext;

  render() {
    const { items, profile } = this.state;
    const { wishlistIds } = this.context;
    return (
      <div className="myGifts">
        <div className="myGifts__info">
          <Avatar img={profile.photo_max_orig || profile.photo_100} lg />
          <div className="right">
            <Title>{`${profile.first_name} ${profile.last_name}`}</Title>
          </div>
        </div>
        <div className="myGifts__box">
          <ItemBox items={items} compareTo={wishlistIds} />
        </div>

      </div>

    );
  }
}

export default FriendsWishlist;
