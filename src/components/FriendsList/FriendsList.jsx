import React, {Component} from 'react';
import "./FriendsList.css"

import img from "../../img/avatar.jpg"
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
        const profile = {
            name: "Qwert Werty",
            img: img
        };

        const profiles = [{...profile}, {...profile}, {...profile}, {...profile}];

        return (
            <div className={'FriendsList__box'}>
                {profiles.map(i => {
                    return (
                        <div className={'FriendsList__list'}>
                            <FriendItem profile={i}/>
                        </div>
                    )
                })}
                <div className={'FriendsList__button'}>
                    {(this.state.loading) ?
                        (<Spinner/>) :
                        (<Button onClick={this.loadMore} width={130} style={'secondary'}>Показать ещё</Button>)}
                </div>
            </div>
        );
    }
}

FriendsList.propTypes = {};

export default FriendsList;
