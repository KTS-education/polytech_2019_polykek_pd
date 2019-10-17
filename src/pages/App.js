import React from 'react';
import './App.css';

import avatar from '../img/avatar.jpg';

import Avatar from '../components/shared/Avatar'
import LinkText from "../components/shared/LinkText";
import Title from "../components/shared/Title";
import SubTitle from "../components/shared/SubTitle";
import ProfileLinkBlock from "../components/Header/ProfileLinkBlock/ProfileLinkBlock";
import FriendsLinkBlock from "../components/Header/FriendsLinkBlock";
import Button from "../components/shared/Button/Button";
import ItemBox from "../components/shared/ItemBox";
import SearchBar from "../components/shared/SearchBar/SearchBar";
import Spinner from "../components/shared/Spinner";
import Header from "../components/Header"
import Main from "./Main";
import Friends from "./Friends";
class App extends React.Component {
    render() {
        const avatars = [avatar, avatar, avatar];
        const profile = { name: 'Egor Fadeev', avatar: avatar};

        return (
            <div className="Mainpending">
                <Main />
                <hr/>
                <Friends />
                <hr/>
                <Header profile={profile} friends={avatars} />
                <Title>Wishlist &#128525;</Title>
                <hr/>
                <Avatar img={avatar}/>
                <hr/>
                <LinkText>LinkText</LinkText>
                <hr/>
                <Title>Title</Title>
                <hr/>
                <SubTitle>SubTitle</SubTitle>
                <hr/>
                <ProfileLinkBlock name={profile.name} img={profile.avatar}/>
                <hr/>
                <FriendsLinkBlock friends={avatars}/>
                <hr/>
                <Button style="primary" width={200}>Добавить в избранное</Button>
                <hr/>
                <Button style="secondary" width={200}>Добавить в избранное</Button>
                <hr/>
                <Spinner />
                <hr/>
                <SearchBar/>
                <hr/>
                <ItemBox />
            </div>
        );
    }
}

export default App;
