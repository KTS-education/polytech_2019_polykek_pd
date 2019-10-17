import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./LinkText.css";

class LinkText extends Component {
    static propTypes = {
        href: PropTypes.string,
    };

    render() {
        const { href, children } = this.props;
        return (
            <a href={href} className={"LinkText__text"}>{children}</a>
        );
    }
}

export default LinkText;
