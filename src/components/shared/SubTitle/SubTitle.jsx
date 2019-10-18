import React, {Component} from 'react';
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

export default SubTitle;
