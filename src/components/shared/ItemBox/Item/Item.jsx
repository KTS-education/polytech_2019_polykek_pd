import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/shared/Button/Button';
import './Item.scss';

class Item extends Component {
  static propTypes = {
    item: PropTypes.objectOf(PropTypes.string, PropTypes.number).isRequired,
  };

  render() {
    const { item } = this.props;
    const {
      title, img, cost, description,
    } = item;

    return (
      <div className="Item__box">
        <img className="Item__img" src={img} alt={title} />
        <div className="Item__title">
          <span>{title}</span>
        </div>
        <div>
          <span className="Item__cost">{cost}</span>
        </div>
        <div>
          <p className="Item__description">{description}</p>
        </div>
        <div className="Item__button">
          <Button fill>Добавить в избранное</Button>
        </div>
      </div>
    );
  }
}

export default Item;
