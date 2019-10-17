import React, {Component} from 'react';
import "./Friends.css"
import avatar from "../../img/avatar.jpg";
import Header from "../../components/Header/Header";
import Title from "../../components/shared/Title";
import SearchBar from "../../components/shared/SearchBar/SearchBar";
import SubTitle from "../../components/shared/SubTitle";
import ItemBox from "../../components/shared/ItemBox";
import FriendsList from "../../components/FriendsList";

class Friends extends Component {
    render() {
        /* Тестовые данные */
        const profile = {name: 'Egor Fadeev', avatar: avatar};

        return (
            <div>
                <Header profile={profile} link={'Вернуться к поиску'}/>
                <div>
                    <div className={'Main__TopBox'}>
                        <div className={'Main__Title'}>
                            <Title>Мои друзья&#128540;</Title>
                        </div>
                        <div className={'Main__SearchBar'}>
                            <SearchBar/>
                        </div>
                        <div className={'Main__content'}>
                            <FriendsList />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Friends.propTypes = {};

export default Friends;
