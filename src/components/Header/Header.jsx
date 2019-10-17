import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ProfileLinkBlock from "./ProfileLinkBlock";
import FriendsLinkBlock from "./FriendsLinkBlock";
import "./Header.css"
import LinkText from "../shared/LinkText";

class Index extends Component {
    render() {
        const {profile, friends, link} = this.props;

        return (
            <div>
                <div className={'Header__box'}>
                    <div className={'Header__Profile'}>
                        <ProfileLinkBlock name={profile.name} img={profile.avatar}/>
                    </div>
                    {(link) ?
                        (<div className={'Header__link'}>
                            <LinkText >{link}</LinkText>
                        </div>)
                        :
                        (<div className={'Header__friends'}>
                            <FriendsLinkBlock friends={friends}/>
                        </div>)
                    }

                </div>
            </div>
        );
    }
}

Index.propTypes = {
    profile: PropTypes.array,
    friends: PropTypes.array,
    link: PropTypes.string,
};

export default Index;
