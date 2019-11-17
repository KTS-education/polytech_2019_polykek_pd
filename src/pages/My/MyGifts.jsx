import React from 'react';
import ItemBox from 'components/shared/ItemBox';
import Header from 'components/Header/Header';
import Avatar from 'components/shared/Avatar';
import Title from 'components/shared/Title';
import Button from 'components/shared/Button';
import LinkText from 'components/shared/LinkText';
import './MyGifts.css';

import friends from 'data/friends';
import profile from 'data/profile';
import WishListItems from 'data/WishListItems';

class MyGifts extends React.Component {
  render() {
    return (
      <div className="myGifts">
        <Header profile={profile} friends={friends} />
        <div className="myGifts__info">
          <Avatar img={profile.img} lg />
          <div className="right">
            <Title>Qwerty Yrtertw</Title>
            <div className="info__link-row">
              <LinkText>Хочу получить</LinkText>
              <LinkText>Хочу подарить</LinkText>
            </div>
            <Button>Поделиться</Button>

          </div>

        </div>
        <ItemBox items={WishListItems} secondary withImg />

      </div>

    );
  }
}

export default MyGifts;
