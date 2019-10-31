import React, {Component} from 'react';
import "./Title.scss"

class Title extends Component {
    render() {
        const {children} = this.props;

        return (
            <span className="Title__text">{children}</span>
        );
    }
}

export default Title;
