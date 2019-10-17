import React, {Component} from 'react';
import ProfileLinkBlock from "./ProfileLinkBlock";
import FriendsLinkBlock from "./FriendsLinkBlock";
import "./Header.css"

class Index extends Component {
    render() {
        const { profile, friends } = this.props;

        return (
            <div>
                <div className={'Header__box'}>
                    <div className={'Header__Profile'}>
                        <ProfileLinkBlock name={profile.name} img={profile.avatar}/>
                    </div>
                    <div className={'Header__Friends'}>
                        <FriendsLinkBlock friends={friends}/>
                    </div>
                </div>
            </div>
        );
    }
}

Index.propTypes = {};

export default Index;
