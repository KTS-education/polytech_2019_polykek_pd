import React from 'react';
import './App.css';

import avatar from '../img/avatar.jpg';

import Avatar from '../components/Avatar'
import LinkText from "../components/LinkText";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import ProfileLinkBlock from "../components/ProfileLinkBlock/ProfileLinkBlock";
import FriendsLinkBlock from "../components/FriendsLinkBlock";
import Button from "../components/Button/Button";
import ItemBox from "../components/ItemBox";
import SearchBar from "../components/SearchBar/SearchBar";
import Spinner from "../components/Spinner";

class App extends React.Component {
    render() {
        const avatars = [avatar, avatar, avatar];

        return (
            <div className="Mainpending">
                <Title>Wishlist &#128525;</Title>
                <hr/>
                <Avatar AvatarPath={avatar}/>
                <hr/>
                <LinkText>LinkText</LinkText>
                <hr/>
                <Title>Title</Title>
                <hr/>
                <SubTitle>SubTitle</SubTitle>
                <hr/>
                <ProfileLinkBlock name="Егор Фадеев" path={avatar}/>
                <hr/>
                <FriendsLinkBlock Avatars={avatars}/>
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
