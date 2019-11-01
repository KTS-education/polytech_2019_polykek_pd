import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ProfileLinkBlock from "./ProfileLinkBlock";
import FriendsLinkBlock from "./FriendsLinkBlock";
import LinkText from "components/shared/LinkText";
import "./Header.css"

class Index extends Component {
    render() {
        const {profile, friends, link} = this.props;

        return (
            <div>
                <div className={'Header__box'}>
                    <div className={'Header__Profile'}>
                        <ProfileLinkBlock profile={profile}/>
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
    profile: PropTypes.object,
    friends: PropTypes.array,
    link: PropTypes.string,
};

export default Index;
