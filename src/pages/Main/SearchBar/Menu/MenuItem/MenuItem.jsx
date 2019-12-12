import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MenuItem.scss';

class MenuItem extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    completion: PropTypes.string,
  };

  static defaultProps = {
    completion: '',
  };

  render() {
    const { children, completion } = this.props;

    return (
      <div className="MenuItem__box">
        <span className="MenuItem__text">
          {children}
          <span className="MenuItem__completion">{completion}</span>
        </span>
      </div>
    );
  }
}

export default MenuItem;
