import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MenuItem.css';

class MenuItem extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
  };

  render() {
    const { children } = this.props;

    return (
      <div className="MenuItem__box">
        <span className="MenuItem__text">{children}</span>
      </div>
    );
  }
}

export default MenuItem;
