/* eslint linebreak-style: ["error", "windows"] */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MenuItem.css';
import { Link } from 'react-router-dom';

class MenuItem extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
  };


  render() {
    const { children } = this.props;

    return (
      <div className="MenuItem__box">

        <Link to={`/itembox/${children}`} className="MenuItem__text">{children}</Link>
      </div>
    );
  }
}

export default MenuItem;
