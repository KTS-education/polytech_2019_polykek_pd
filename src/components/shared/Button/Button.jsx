import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./Button.css"

class Button extends Component {

    render() {
        const { width, onClick, children, style } = this.props;

        const widthCalc = (width) ? width : children.length * 9;

        return (
            <div onClick={onClick} style={{width: widthCalc}} className={style}>
                <span className="Button__text">
                    {children}
                </span>
            </div>
        );
    }

}
Button.defaultProps = {
    style: 'primary'
};

Button.propTypes = {
    width: PropTypes.number,
    type: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
