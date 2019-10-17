import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./Title.css"

class Title extends Component {
    render() {
        return (
            <div>
                <span className="Title__text">{this.props.children}</span>
            </div>
        );
    }
}

Title.propTypes = {};

export default Title;
