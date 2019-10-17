import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./SubTitle.css"

class SubTitle extends Component {
    render() {
        return (
            <div>
                <span className="SubTitle__text">{this.props.children}</span>
            </div>
        );
    }
}

SubTitle.propTypes = {};

export default SubTitle;
