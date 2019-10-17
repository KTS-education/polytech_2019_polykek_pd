import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./FriendItem.css"
import Avatar from "../../shared/Avatar";
import Button from "../../shared/Button/Button";

class FriendItem extends Component {
    render() {
        const { profile } = this.props;
        return (
            <div>
                <div className={'FriendItem__box'}>
                    <div className="FriendItem__avatar">
                        <Avatar img={profile.img} size={100}/>
                    </div>
                    <div className="FriendItem__info">
                        <div className={'FriendItem__name-box'}>
                            <span className="FriendItem__name">{profile.name}</span>
                        </div>
                        <Button>Узнать что подарить</Button>
                    </div>
                </div>
            </div>
        );
    }
}

FriendItem.propTypes = {
    profile: PropTypes.object,
};

export default FriendItem;
