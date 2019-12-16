import React, { Component } from 'react';
import api from 'api';
import { connect } from 'react-redux';

import Header from 'components/Header/Header';
import Title from 'components/shared/Title';
import SearchBar from 'pages/Main/SearchBar/SearchBar';
import SubTitle from 'components/shared/SubTitle';
import ItemBox from 'components/shared/ItemBox';
import { Route } from 'react-router-dom';


import './Main.scss';


import MainContext from '../MainContext';
import mapStateToProps from '../../state/mapStateToProps';


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

  static contextType = MainContext;

  render() {
    const {
      profile, friends,
    } = this.context;

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
              <SearchBar context={this.props} />
            </div>
            <div className="Main__content">
              <div className="Main__content-subtitle">
                <SubTitle>
                  Популярное
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
export default connect(mapStateToProps)(Main);
