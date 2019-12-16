import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Menu.scss';
import MenuItem from './MenuItem';

class Menu extends Component {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    data: PropTypes.array,
    context: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    data: [],
  };

  render() {
    const { show, data, context: { dispatch } } = this.props;
    return (
      <div>
        {show && data.length === 0
        && (
          <div className="Menu__box">
            <MenuItem completion="">Не найдено</MenuItem>
          </div>
        )}
        {show && data.length > 0
        && (
          <div className="Menu__box">
            {data
              .map((item) => (
                <MenuItem key={item.completion} completion={item.completion} dispatch={dispatch}>
                  {item.value
                    .slice(0, item.value.length - item.completion.length)}
                </MenuItem>
              ))}
          </div>
        )}
      </div>
    );
  }
}

export default Menu;
