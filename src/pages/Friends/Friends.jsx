import React, {Component} from 'react';
import "./Friends.css"
import Header from "components/Header/Header";
import Title from "components/shared/Title";
import SearchBar from "components/shared/SearchBar/SearchBar";
import FriendsList from "components/FriendsList";

import profile from "data/profile";
import friends from "data/friends";

class Friends extends Component {
    render() {
        return (
            <div>
                <Header profile={profile} link={'Вернуться к поиску'}/>
                <div>
                    <div className={'Main__TopBox'}>
                        <div className={'Main__Title'}>
                            <Title>Мои друзья<span role="img"
                                                   aria-label="Face With Stuck-Out Tongue And Winking Eye">&#128540;</span></Title>
                        </div>
                        <div className={'Main__SearchBar'}>
                            <SearchBar/>
                        </div>
                        <div className={'Main__content'}>
                            <FriendsList friends={friends}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Friends;
