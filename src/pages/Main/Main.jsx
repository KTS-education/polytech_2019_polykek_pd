import React, { Component } from 'react';
import api from 'api';

import Header from 'components/Header/Header';
import Title from 'components/shared/Title';
import SearchBar from 'pages/Main/SearchBar/SearchBar';
import SubTitle from 'components/shared/SubTitle';
import ItemBox from 'pages/Main/ItemBox';
import Spinner from '../../components/shared/Spinner';

import './Main.scss';

import MainContext from '../MainContext';


export default class Main extends Component {
  state = {
    isAuthorizing: false,
    userID: null,
    items: [],
    title: '',
    itemsIsLoading: true,
  };

  static propTypes = {};

  // eslint-disable-next-line react/sort-comp
  static contextType = MainContext;

  componentDidMount() {
    this.loadItems('apple', 'популярное');
  }

  loadItems = (query, title = 'найдено') => {
    this.setState({ itemsIsLoading: true });
    if (query.length < 2) {
      this.setState({ data: [], dropMenu: false });
      return true;
    }
    api('/api/products/search', 'GET', {
      query,
      lat: 55.764491899999996,
      lon: 37.6710281,
    }).then((result) => {
      console.log('LoadItems Response:', result.response.response);
      if (result.response) {
        if (result.response.response.items.length === 0) {
          this.setState({
            items: result.response.response.items,
            itemsIsLoading: false,
            title: 'не найдено',
          });
          return null;
        }
        this.setState({
          items: result.response.response.items,
          itemsIsLoading: false,
          title,
        });
      } else {
        console.error(result.error);
      }
      return null;
    }).catch((e) => console.error(e));
    return null;
  };

  addToWishlistRedux = (id) => {
    const { setWishlistIds, wishlistIds } = this.context;
    setWishlistIds([...wishlistIds, id]);
  };

  render() {
    const { profile, friends, wishlistIds } = this.context;
    const { items, title, itemsIsLoading } = this.state;
    return (
      <div className="Main__box">
        <Header profile={profile} friends={friends} isFriends />
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
              <SearchBar onSelect={this.loadItems} />
            </div>
            <div className="Main__content">
              <div className="Main__content-subtitle">
                {
                  !itemsIsLoading && title === 'популярное' && (
                    <SubTitle>
                      Популярное
                      <span role="img" aria-label="Grinning Face with Star Eyes"> &#129321;</span>
                    </SubTitle>
                  )
                }
                {
                  !itemsIsLoading && title === 'не найдено' && (
                    <SubTitle>
                      Ничего не найдено
                      <span role="img" aria-label="Grinning Face with Star Eyes"> (((</span>
                    </SubTitle>
                  )
                }
                {
                  !itemsIsLoading && title === 'найдено' && (
                    <SubTitle>
                      Найдено
                      <span role="img" aria-label="Grinning Face with Star Eyes"> &#129321;</span>
                    </SubTitle>
                  )
                }

              </div>
              <div>
                {itemsIsLoading && <Spinner />}
                {!itemsIsLoading && (
                <ItemBox
                  items={items}
                  compareTo={wishlistIds}
                  addToWishlistRedux={this.addToWishlistRedux}
                />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
