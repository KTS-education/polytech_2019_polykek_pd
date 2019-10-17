import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Avatar from "../../shared/Avatar";
import LinkText from "../../shared/LinkText";
import "./ProfileLinkBlock.css"

class ProfileLinkBlock extends Component {
    render() {
        const { img, name } = this.props;

        return (
            <div onClick={() => console.log("Click")} className="ProfileLinkBlock__box">
                <div className="ProfileLinkBlock__avatar">
                    <Avatar img={ img }/>
                </div>
                <div className="ProfileLinkBlock__text">
                    <LinkText>{ name }</LinkText>
                </div>
            </div>
        );
    }
}

ProfileLinkBlock.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string
};

export default ProfileLinkBlock;
