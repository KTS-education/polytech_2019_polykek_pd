import React, { Component } from 'react';
import _ from 'lodash';
import './SearchBar.scss';
import api from 'api';
import PropTypes from 'prop-types';
import Menu from './Menu';

class SearchBar extends Component {
  state = {
    dropMenu: false,
    data: [],
    inputValue: '',
  };

  static propTypes = {
    onSelect: PropTypes.func.isRequired,
  };

  onKeyPressEnter = (e) => {
    if (e.charCode === 13) {
      this.setState({ dropMenu: true });
    }
  };

  getSuggest = _.debounce((query) => {
    if (query.length < 2) {
      this.setState({ data: [], dropMenu: false });
      return true;
    }
    api('/api/products/suggest', 'GET', {
      query,
      lat: 55.764491899999996,
      lon: 37.6710281,
    }).then((result) => {
      if (result.response) {
        this.setState({
          dropMenu: true,
          data: result.response.suggestions,
        });
      } else {
        console.error(result.error);
      }
      return null;
    }).catch((e) => console.error(e));
    return null;
  }, 300);

  onSelectInput = (e) => {
    if (e.target.value) {
      this.getSuggest(e.target.value);
    } else {
      this.setState({ dropMenu: false });
    }
    // console.log('select', e);
  };

  onChangeValue = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  onSelect = (children, completion) => {
    this.setState({ inputValue: `${children}${completion}`, dropMenu: false });
    const { onSelect } = this.props;
    const combined = `${children} ${completion}`;
    onSelect(combined);
  };

  render() {
    const { data, dropMenu, inputValue } = this.state;
    return (
      <div className="SearchBar__box">
        <input
          onChange={this.onChangeValue}
          onSelect={this.onSelectInput}
          onKeyPress={this.onKeyPressEnter}
          className="SearchBar__input"
          type="string"
          placeholder="Я хочу..."
          value={inputValue}
        />
        <Menu data={data.completions} show={dropMenu} onSelect={this.onSelect} />
      </div>
    );
  }
}

export default SearchBar;
