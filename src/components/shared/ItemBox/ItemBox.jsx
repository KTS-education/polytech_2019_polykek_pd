/* eslint linebreak-style: ["error", "windows"] */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import Item from './Item';
import './ItemBox.scss';

class ItemBox extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    items: [],
  };

  render() {
    const { items } = this.props;
    return (
      <div className="ItemBox__box">
        <Masonry>
          { items.map((item) => (
            <Item key={item.id} item={item} />
          )) }
        </Masonry>

      </div>
    );
  }
}

export default ItemBox;
