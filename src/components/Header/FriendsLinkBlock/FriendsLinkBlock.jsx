import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./FriendsLinkBlock.css"

import LinkText from "../../shared/LinkText";
import Avatar from "../../shared/Avatar";

class FriendsLinkBlock extends Component {
    render() {
        const {friends} = this.props;

        return (
            <div className="FriendsLinkBlock__box">
                <LinkText>Мои друзья</LinkText>
                <ul className="FriendsLinkBlock__avatars">
                    {friends.slice(0,3).map((i, index) => {
                        return (
                            <li key={index} className="FriendsLinkBlock__avatar">
                                <Avatar img={i.img}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

FriendsLinkBlock.propTypes = {
    friends: PropTypes.array.isRequired
};

export default FriendsLinkBlock;
