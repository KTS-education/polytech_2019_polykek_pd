import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './LinkText.scss';

class LinkText extends Component {
    static propTypes = {
      to: PropTypes.string,
      children: PropTypes.string.isRequired,
    };

    static defaultProps = {
      to: '#',
    };

    render() {
      const { to, children } = this.props;
      console.log(this.props);
      return (
        <Link to={to} className="LinkText__text">{children}</Link>
      );
    }
}

export default LinkText;
