/* eslint linebreak-style: ["error", "windows"] */

import React, { Component } from 'react';
import api from 'api';

import Header from 'components/Header/Header';
import Title from 'components/shared/Title';
import SearchBar from 'components/shared/SearchBar/SearchBar';
import SubTitle from 'components/shared/SubTitle';
import ItemBox from 'components/shared/ItemBox';

import './Main.css';
/* Тестовые данные */
import profile from 'data/profile';
import friends from 'data/friends';
// import WishListItems from 'data/WishListItems';
import { Route } from 'react-router-dom';


class Main extends Component {
  state = {
    isAuthorizing: false,
    userID: null,
  };

  static propTypes = {};

  componentDidMount() {
    api(`/api/user/auth${window.location.search}`, 'POST')
      .then((result) => {
        if (result.response) {
          this.setState({ userID: result.response.user_id });
          return true;
        }
        return console.error(result.error);
      }).catch((e) => console.error(e));
  }


  render() {
    return (
      <div>
        <Header profile={profile} friends={friends} />
        <div>
          <div className="Main__TopBox">
            <div className="Main__Title">
              <Title>
                Wishlist
                <span
                  role="img"
                  aria-label="Smiling Face With Heart-Shaped Eyes"
                >
                                &#128525;
                </span>
              </Title>
            </div>
            <div className="Main__SearchBar">
              <SearchBar />
            </div>
            <div className="Main__content">
              <div className="Main__content-subtitle">
                <SubTitle>
                  Товары
                  <span
                    role="img"
                    aria-label="Grinning Face with Star Eyes"
                  >
                                        &#129321;
                  </span>
                </SubTitle>
              </div>
              <div>
                <Route path="/itembox/:query" component={ItemBox} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
