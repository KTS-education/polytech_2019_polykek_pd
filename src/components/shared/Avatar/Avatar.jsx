import React from 'react';
import PropTypes from 'prop-types'
import './Avatar.css';

class Avatar extends React.Component {
    static propTypes = {
        img: PropTypes.string.isRequired
    };

    static defaultProps = {
        size: 50,
    };

    render() {
        const { img, size } = this.props;
        return (
            <div style={{width: `${size}px`, height: `${size}px`}} className="Avatar__box">
                <img style={{width: `${size}px`}} className="Avatar__img" src={img} alt="avatar"/>
            </div>
        );
    }
}

export default Avatar;
