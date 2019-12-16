import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MenuItem.scss';
import { setCompletion } from '../../../../../state/searchbar';


class MenuItem extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    completion: PropTypes.string,
  };

  static defaultProps = {
    completion: '',
  };

  onItemClicked = () => {
    const { dispatch, children, completion } = this.props;
    dispatch(setCompletion(`${children} ${completion}`));
  };

  render() {
    const { children, completion } = this.props;
    return (
      <div className="MenuItem__box">
        <span className="MenuItem__text">
          <Link to={`/itembox/${children} ${completion}`} className="MenuItem__text" onClick={this.onItemClicked}>
            {children}
            {' '}
            <span className="MenuItem__completion">{completion}</span>
          </Link>
        </span>
      </div>
    );
  }
}

export default MenuItem;
