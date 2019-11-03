import React from 'react';
import Avatar from '../components/shared/Avatar'
import LinkText from "../components/shared/LinkText";
import Title from "../components/shared/Title";
import SubTitle from "../components/shared/SubTitle";
import ProfileLinkBlock from "../components/Header/ProfileLinkBlock/ProfileLinkBlock";
import FriendsLinkBlock from "../components/Header/FriendsLinkBlock";
import Button from "../components/shared/Button/Button";
import SearchBar from "../components/shared/SearchBar/SearchBar";
import Spinner from "../components/shared/Spinner";
import Header from "../components/Header"
import Main from "./Main";
import Friends from "./Friends";
import MyGifts from "./My"
import profile from "../data/profile";
import friends from "../data/friends";
import './App.css';

class App extends React.Component {


    render() {
        return (
            <div className="Mainpending">
                <Main/>
                <hr/>
                <Friends/>
                <hr/>
                <Header profile={profile} friends={friends}/>
                <hr/>
                <Title>Wishlist &#128525;</Title>
                <hr/>
                <Avatar img={profile.img}/>
                <hr/>
                <LinkText>LinkText</LinkText>
                <hr/>
                <Title>Title</Title>
                <hr/>
                <SubTitle>SubTitle</SubTitle>
                <hr/>
                <ProfileLinkBlock profile={profile}/>
                <hr/>
                <FriendsLinkBlock friends={friends}/>
                <hr/>
                <Button primary>Добавить в избранное</Button>
                <hr/>
                <Button secondary>Добавить в избранное</Button>
                <Button secondary>Добавить в избранноеqweqweqweqweqweqwe</Button>
                <hr/>
                <Spinner/>
                <hr/>
                <SearchBar/>
                <hr/>
                <MyGifts/>
            </div>
        );
    }
}

export default App;
