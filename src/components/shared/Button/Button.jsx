import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./Button.scss"

class Button extends Component {

    render() {
        const {onClick, children, primary, secondary, fill} = this.props;
        const classButton = `${(primary) ? 'btn__primary' : ''}${(secondary) ? ' btn__secondary' : ''}${(fill) ? ' btn__fill':''}`;

        return (
            <div onClick={onClick} className={classButton}>
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
