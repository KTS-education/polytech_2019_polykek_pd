import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Avatar from "../../shared/Avatar";
import LinkText from "../../shared/LinkText";
import "./ProfileLinkBlock.css"

class ProfileLinkBlock extends Component {
    render() {
        const { profile } = this.props;

        return (
            <div onClick={() => console.log("Click")} className="ProfileLinkBlock__box">
                <div className="ProfileLinkBlock__avatar">
                    <Avatar img={ profile.img }/>
                </div>
                <div className="ProfileLinkBlock__text">
                    <LinkText>{ profile.name }</LinkText>
                </div>
            </div>
        );
    }
}

ProfileLinkBlock.propTypes = {
    profile: PropTypes.object,
};

export default ProfileLinkBlock;
