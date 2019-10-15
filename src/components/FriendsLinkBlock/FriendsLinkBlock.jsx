import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./FriendsLinkBlock.css"

import LinkText from "../LinkText";
import Avatar from "../Avatar";

class FriendsLinkBlock extends Component {
    render() {
        const avatars = this.props.Avatars;
        return (
            <div className="FriendsLinkBlock__box">
                <LinkText>Мои друзья</LinkText>
                <div className="FriendsLinkBlock__avatars">
                    <Avatar className="FriendsLinkBlock__avatar" AvatarPath={avatars[0]} />
                    <Avatar className="FriendsLinkBlock__avatar" AvatarPath={avatars[1]} />
                    <Avatar className="FriendsLinkBlock__avatar" AvatarPath={avatars[2]} />
                </div>
            </div>
        );
    }
}

FriendsLinkBlock.propTypes = {
    Avatars: PropTypes.array
};

export default FriendsLinkBlock;
