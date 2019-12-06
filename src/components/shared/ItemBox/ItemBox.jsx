/* eslint linebreak-style: ["error", "windows"] */
/*eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../../api';

import Masonry from 'react-masonry-component';
import Item from './Item';
import './ItemBox.scss';

class ItemBox extends Component {
  static propTypes = {
    match: PropTypes.object,
    params: PropTypes.object,
    query: PropTypes.string,
  };

  state = {
    items: []
  };

  componentDidMount() {
    const { match: { params: { query } } } = this.props;
    api(`/api/products/search?query=${query}`, 'GET')
        .then((result) => {
          if (result.response) {
              this.setState({ items: result.response.response.items });
              return true;
          }
          return console.error(result.error);
        }).catch((e) => console.error(e));
  };


  componentDidUpdate(prevProps, prevState, snapshot) {
      const { match: { params: { query } } } = this.props;
      api(`/api/products/search?query=${query}`, 'GET')
          .then((result) => {
              if (result.response) {
                  this.setState({ items: result.response.response.items });
                  return true;
              }
              return console.error(result.error);
          }).catch((e) => console.error(e));

  }

  render() {
    const { items } = this.state;
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
