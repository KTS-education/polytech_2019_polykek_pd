import React from 'react';
import PropTypes from 'prop-types'
import './Avatar.css';

class Avatar extends React.Component {
    static propTypes = {
        img: PropTypes.string.isRequired
    };

    render() {
        const { img } = this.props;
        return (
            <div className="Avatar__box">
                <img className="Avatar__img" src={img} alt="avatar"/>
            </div>
        );
    }
}

export default Avatar;
