import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Avatar from "../Avatar";
import LinkText from "../LinkText";
import "./ProfileLinkBlock.css"

class ProfileLinkBlock extends Component {
    render() {
        return (
            <div onClick={() => console.log("Click")} className="ProfileLinkBlock__box">
                <div className="ProfileLinkBlock__avatar">
                    <Avatar AvatarPath={this.props.path}/>
                </div>
                <div className="ProfileLinkBlock__text">
                    <LinkText>{this.props.name}</LinkText>
                </div>
            </div>
        );
    }
}

ProfileLinkBlock.propTypes = {
    path: PropTypes.string,
    name: PropTypes.string
};

export default ProfileLinkBlock;
