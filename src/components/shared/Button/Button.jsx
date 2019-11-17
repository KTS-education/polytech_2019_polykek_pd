import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.scss';

class Button extends Component {
  static propTypes = {
    children: PropTypes.string,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    fill: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    children: '',
    primary: true,
    secondary: false,
    fill: false,
    onClick: () => null,
  };

  render() {
    const {
      onClick, children, primary, secondary, fill,
    } = this.props;
    const btn = classNames({
      btn__primary: primary,
      btn__secondary: secondary,
      btn__fill: fill,
    });

    return (
      <div className={btn} onClick={onClick} role="button" tabIndex={0}>
        <span className="btn__text">
          {children}
        </span>
      </div>
    );
  }
}

export default Button;
