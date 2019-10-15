import React from 'react';
import PropTypes from 'prop-types'
import './Avatar.css';

class Avatar extends React.Component {
    static propTypes = {
        AvatarPath: PropTypes.string.isRequired
    };

    render() {
        const path = this.props.AvatarPath;
        return (
            <div className="Avatar__box">
                <img className="Avatar__img" src={path} alt="avatar"/>
            </div>
        );
    }
}

export default Avatar;
