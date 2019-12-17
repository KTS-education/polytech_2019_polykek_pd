import React from 'react';
// import ItemBox from 'pages/Main/ItemBox';
import Header from 'components/Header/Header';
import Avatar from 'components/shared/Avatar';
import Title from 'components/shared/Title';
// import Button from 'components/shared/Button';
// import LinkText from 'components/shared/LinkText';
import './MyGifts.css';

import friends from 'data/friends';
import api from 'api';
import ItemBox from '../Main/ItemBox';
import MainContext from '../MainContext';
// import WishListItems from 'data/WishListItems';

class MyGifts extends React.Component {
  state = {
    items: [],
  };

  componentDidMount() {
    api('/api/wishlist/get', 'GET', {
      id: window.user_id,
    }).then((result) => {
      if (result.response) {
        this.setState({
          items: result.response.wishlist,
        });
      } else {
        console.error(result);
      }
      return null;
    }).catch((e) => console.error(e));
  }

  static contextType = MainContext;

  render() {
    const { profile } = this.context;
    const { items } = this.state;
    return (
      <div className="myGifts">
        <Header profile={profile} friends={friends} />
        <div className="myGifts__info">
          <Avatar img={profile.photo_max_orig} lg />
          <div className="right">
            <Title>{`${profile.first_name} ${profile.last_name}`}</Title>
            {/* <div className="info__link-row"> */}
            {/*  <LinkText to="/mywishlish">Хочу получить</LinkText> */}
            {/*  <LinkText>Хочу подарить</LinkText> */}
            {/* </div> */}
            {/* <Button>Поделиться</Button> */}
          </div>
        </div>
        <div className="myGifts__box">
          <ItemBox items={items} />
        </div>

      </div>

    );
  }
}

export default MyGifts;
