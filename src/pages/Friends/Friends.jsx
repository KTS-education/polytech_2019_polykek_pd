import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Header from 'components/Header/Header';
import Title from 'components/shared/Title';
import SearchBar from 'pages/Main/SearchBar/SearchBar';
import FriendsList from 'pages/Friends/FriendsList';

import MainContext from '../MainContext';

import './Friends.scss';


class Friends extends Component {
  static propTypes = {};

  static defaultProps = {};

  static contextType = MainContext;

  render() {
    const { profile } = this.context;

    return (
      <div className="Friends__box">
        <Header profile={profile} link={{ text: 'Вернуться к поиску', to: '/' }} isLink />
        <div>
          <div className="Main__TopBox">
            <div className="Main__Title">
              <Title>
                Мои друзья
                <span
                  role="img"
                  aria-label="Face With Stuck-Out Tongue And Winking Eye"
                >
                    &#128540;
                </span>
              </Title>
            </div>
            {/* TODO: сделать поиск по друзьям через апи вк */}
            <div className="Main__SearchBar">
              <SearchBar />
            </div>
            <div className="Main__content">
              <FriendsList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Friends;
