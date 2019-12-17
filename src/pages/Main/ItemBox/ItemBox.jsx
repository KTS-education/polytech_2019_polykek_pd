import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import Item from './Item';
import './ItemBox.scss';

class ItemBox extends Component {
  static propTypes = {
    items: PropTypes.array,
    allBooked: PropTypes.bool,
  };

  static defaultProps = {
    items: [],
    allBooked: false,
  };

  render() {
    const { items, allBooked } = this.props;
    return (
      <div className="ItemBox__box">
        <Masonry>
          {items.map((item) => (
            <Item key={item.id} item={item} allBooked={allBooked} />
          ))}
        </Masonry>
      </div>
    );
  }
}

export default ItemBox;
