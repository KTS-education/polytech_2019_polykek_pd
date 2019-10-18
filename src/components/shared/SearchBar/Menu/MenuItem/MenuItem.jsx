import React, {Component} from 'react';
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

export default MenuItem;
