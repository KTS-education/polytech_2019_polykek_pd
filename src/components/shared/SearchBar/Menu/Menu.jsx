/* eslint linebreak-style: ["error", "windows"] */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Menu.css';
import MenuItem from './MenuItem';

class Menu extends Component {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string, PropTypes.number)),
  };

  render() {
    const { show, data } = this.props;

    return (
      <div>
        {show && data
        && (
          <div className="Menu__box">
            {data.map((item) => <MenuItem key={item.value}>{item.value}</MenuItem>)}
          </div>
        )}
      </div>
    );
  }
}

export default Menu;
