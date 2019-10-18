import React, {Component} from 'react';
import "./Title.css"

class Title extends Component {
    render() {
        const {children} = this.props;

        return (
            <div>
                <span className="Title__text">{children}</span>
            </div>
        );
    }
}

export default Title;
