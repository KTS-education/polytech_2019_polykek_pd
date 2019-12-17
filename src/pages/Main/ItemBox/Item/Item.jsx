import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/shared/Button/Button';
import api from 'api';
import './Item.scss';

class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    allBooked: PropTypes.bool,
  };

  static defaultProps = {
    allBooked: false,
  };

  state = {
    booked: false,
  };

  componentDidMount() {
    const { allBooked } = this.props;

    if (allBooked) {
      this.setState({
        booked: true,
      });
    }
  }

  bookItem = () => {
    const { item } = this.props;
    const { booked } = this.state;
    let url;

    if (!booked) {
      url = '/api/wishlist/add';
    } else {
      url = '/api/wishlist/delete';
    }

    api(url, 'POST', {
      id: item.id,
      price: item.price.avg,
      name: item.name,
      photo: item.photo.url,
    }).then((result) => {
      if (result.response) {
        this.setState({ booked: !booked });
      } else {
        console.error(result.error);
      }
      return null;
    }).catch((e) => console.error(e));
  };

  render() {
    const { item } = this.props;
    const { booked } = this.state;
    const text = booked ? 'Убрать из вишлиста' : 'Добавить в избранное';
    const {
      name, photo, price, description,
    } = item;
    if (photo === undefined) {
      return (
        <div className="Item__box">
          <div className="Item__title">
            <span>{name}</span>
          </div>
          <div>
            <span className="Item__cost">{price.avg || price}</span>
          </div>
          {description && (
            <div>
              <p className="Item__description">{description}</p>
            </div>
          )}

          <div className="Item__button">
            <Button fill>Добавить в избранное</Button>
          </div>
        </div>
      );
    }

    return (
      <div className="Item__box">
        <img className="Item__img" src={photo.url || photo} alt={name.url || name} />
        <div className="Item__title">
          <span>{name}</span>
        </div>
        <div>
          <span className="Item__cost">{price.avg || price}</span>
        </div>
        {description && (
          <div>
            <p className="Item__description">{description}</p>
          </div>
        )}
        <div className="Item__button">
          <Button fill onClick={this.bookItem} secondary={booked}>{text}</Button>
        </div>
      </div>
    );
  }
}

export default Item;
