import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import "./Button.scss"

class Button extends Component {

    render() {
        const {onClick, children, primary, secondary, fill} = this.props;
        const btn = classNames({
            'btn__primary': primary,
            'btn__secondary': secondary,
            'btn__fill': fill,
        });

        return (
            <div onClick={onClick} className={btn}>
                <span className="btn__text">
                    {children}
                </span>
            </div>
        );
    }

}

Button.defaultProps = {
    primary: true,
};

Button.propTypes = {
    children: PropTypes.string,
    width: PropTypes.number,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    fill: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Button;
