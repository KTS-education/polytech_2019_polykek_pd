import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MenuItem.scss';

class MenuItem extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    completion: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
  };

  static defaultProps = {
    completion: '',
  };

  searchItems = () => {
    const { children, completion, onSelect } = this.props;
    onSelect(children, completion);
  };

  render() {
    const { children, completion } = this.props;

    return (
      <div className="MenuItem__box">
        <span role="link" tabIndex="0" className="MenuItem__text" onClick={this.searchItems}>
          {children}
          <span className="MenuItem__completion">{completion}</span>
        </span>
      </div>
    );
  }
}

export default MenuItem;
