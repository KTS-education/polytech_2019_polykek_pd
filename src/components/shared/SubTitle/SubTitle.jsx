/* eslint linebreak-style: ["error", "windows"] */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SubTitle.scss';

class SubTitle extends Component {
  static propTypes = {
    children: PropTypes.array.isRequired,
  };

  render() {
    const { children } = this.props;
    return (
      <span className="SubTitle__text">{children}</span>
    );
  }
}

export default SubTitle;
