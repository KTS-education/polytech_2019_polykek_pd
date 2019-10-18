import React, {Component} from 'react';
import "./FriendsList.css"
import PropTypes from 'prop-types';
import FriendItem from "./FriendItem";
import Button from "../shared/Button/Button";
import Spinner from "../shared/Spinner";

class FriendsList extends Component {
    state = {
        loading: false,
    };

    loadMore = () => {
        this.setState({loading: true});
        setTimeout(() => {
            this.setState({loading: false})
        }, Math.round(300 + Math.random() * 1500));
    };

    render() {
        const {friends} = this.props;

        return (
            <div className={'FriendsList__box'}>
                {friends.map((i, index) => {
                    return (
                        <div key={index} className={'FriendsList__list'}>
                            <FriendItem profile={i}/>
                        </div>
                    )
                })}
                <div className={'FriendsList__button'}>
                    {(this.state.loading) ?
                        (<Spinner/>) :
                        (<Button onClick={this.loadMore}
                                 width={130}
                                 style={'secondary'}>Показать ещё</Button>)}
                </div>
            </div>
        );
    }
}

FriendsList.propTypes = {
    friends: PropTypes.array,
};

export default FriendsList;
