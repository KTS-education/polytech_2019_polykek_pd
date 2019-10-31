import React, {Component} from 'react';
import "./SubTitle.scss"

class SubTitle extends Component {
    render() {
        return (
            <span className="SubTitle__text">{this.props.children}</span>
        );
    }
}

export default SubTitle;
