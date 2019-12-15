import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Header from 'components/Header/Header';
import Title from 'components/shared/Title';
import FriendsList from 'pages/Friends/FriendsList';
import SearchBar from './SearchBar/SearchBar';

import MainContext from '../MainContext';

import './Friends.scss';


class Friends extends Component {
  state = {
    filter: '',
  };

  static propTypes = {};

  static defaultProps = {};

  setFilter = (value) => {
    this.setState({ filter: value });
  };

  static contextType = MainContext;

  render() {
    const { profile } = this.context;
    const { filter } = this.state;

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
              <SearchBar onSelect={this.setFilter} />
            </div>
            <div className="Main__content">
              <FriendsList filter={filter} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Friends;
