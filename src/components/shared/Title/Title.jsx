/* eslint linebreak-style: ["error", "windows"] */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Title.scss';

class Title extends Component {
  static propTypes = {
    children: PropTypes.array.isRequired,
  };

  render() {
    const { children } = this.props;
    return (
      <span className="Title__text">{children}</span>
    );
  }
}

export default Title;
