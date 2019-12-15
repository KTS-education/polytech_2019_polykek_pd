import React, { Component } from 'react';
import _ from 'lodash';
import './SearchBar.scss';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = {
    data: [],
    inputValue: '',
  };

  static propTypes = {
    onSelect: PropTypes.func,
  };

  static defaultProps = {
    onSelect: (q) => q,
  };

  onKeyPressEnter = (e) => {
    if (e.charCode === 13) {
      console.log('press', e);
    }
  };

  getSuggest = _.debounce((query) => {
    const { onSelect } = this.props;

    onSelect(query);
  }, 300);

  onSelectInput = (e) => {
    if (e.target.value) {
      this.getSuggest(e.target.value);
    } else {
      this.setState({ dropMenu: false });
    }
  };

  onChangeValue = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  onBlurInput = (e) => {
    const { onSelect } = this.props;
    const { inputValue } = this.state;

    onSelect(inputValue);

    return e;
  };

  render() {
    return (
      <div onBlur={this.onBlurInput} className="SearchBar__box">
        <input
          onChange={this.onChangeValue}
          onSelect={this.onSelectInput}
          onKeyPress={this.onKeyPressEnter}
          className="SearchBar__input"
          type="string"
        />
      </div>
    );
  }
}

export default SearchBar;
