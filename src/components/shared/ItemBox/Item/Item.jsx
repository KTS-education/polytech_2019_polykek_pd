import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/shared/Button/Button';
import './Item.scss';

class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render() {
    const { item } = this.props;
    const { photo: { url } = {}, price: { avg } } = item;
    const {
      name, description,
    } = item;

    return (
      <div className="Item__box">
        <img className="Item__img" src={url} alt={name} />
        <div className="Item__title">
          <span>{name}</span>
        </div>
        <div>
          <span className="Item__cost">{avg}</span>
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
