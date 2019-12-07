import React, { Component } from 'react';
import _ from 'lodash';
import './SearchBar.css';
import api from 'api';
import Menu from './Menu';

class SearchBar extends Component {
    state = {
      dropMenu: false,
      data: [],
    };

    onKeyPressEnter = (e) => {
      if (e.charCode === 13) {
        this.setState({ dropMenu: true });
        console.log('press', e);
      }
    };

    getSuggest = _.debounce((query) => {
      console.log(query);
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

    onBlurInput = (e) => {
      // this.setState({dropMenu: false});
      console.log();
      return e;
    };

    render() {
      const { data, dropMenu } = this.state;
      return (
        <div onBlur={this.onBlurInput} className="SearchBar__box">
          <input
            onSelect={this.onSelectInput}
            onKeyPress={this.onKeyPressEnter}
            className="SearchBar__input"
            type="string"
          />
          <Menu data={data.completions} show={dropMenu} />
        </div>
      );
    }
}

export default SearchBar;
