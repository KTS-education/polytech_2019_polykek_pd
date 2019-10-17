import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./MenuItem.css"

class MenuItem extends Component {
    render() {
        const { children } = this.props;

        return (
            <div className={'MenuItem__box'}>
                <span className={'MenuItem__text'}>{children}</span>
            </div>
        );
    }
}

MenuItem.propTypes = {};

export default MenuItem;
