import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import Item from './Item';
import './ItemBox.scss';

class ItemBox extends Component {
  static propTypes = {
    items: PropTypes.array,
    allBooked: PropTypes.bool,
    compareTo: PropTypes.arrayOf(PropTypes.number),
    addToWishlistRedux: PropTypes.func.isRequired,
  };

  static defaultProps = {
    items: [],
    allBooked: false,
    compareTo: [],
  };

  render() {
    const {
      items, allBooked, compareTo, addToWishlistRedux,
    } = this.props;
    return (
      <div className="ItemBox__box">
        <Masonry>
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
              allBooked={allBooked}
              compareTo={compareTo}
              addToWishlistRedux={addToWishlistRedux}
            />
          ))}
        </Masonry>
      </div>
    );
  }
}

export default ItemBox;
