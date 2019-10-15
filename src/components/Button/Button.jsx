import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./Button.css"

class Button extends Component {

    render() {
        const { width, onClick, children, style } = this.props;

        return (
            <div onClick={onClick} style={{width: width}} className={style}>
                <span className="Button__text">
                    {children}
                </span>
            </div>
        );
    }

    click() {
        console.log("Click")
    }
}

Button.propTypes = {
    width: PropTypes.number,
    style: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
