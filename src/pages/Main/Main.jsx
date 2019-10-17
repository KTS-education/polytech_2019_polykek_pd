import React, {Component} from 'react';
import "./Main.css"
import Header from "../../components/Header/Header";
import Title from "../../components/shared/Title";
import SearchBar from "../../components/shared/SearchBar/SearchBar";


import avatar from "../../img/avatar.jpg";
import SubTitle from "../../components/shared/SubTitle";
import ItemBox from "../../components/shared/ItemBox";

class Main extends Component {
    render() {
        /* Тестовые данные */
        const avatars = [avatar, avatar, avatar];
        const profile = {name: 'Egor Fadeev', avatar: avatar};

        return (
            <div>
                <Header profile={profile} friends={avatars}/>
                <div>
                    <div className={'Main__TopBox'}>
                        <div className={'Main__Title'}>
                            <Title>Wishlist&#128525;</Title>
                        </div>
                        <div className={'Main__SearchBar'}>
                            <SearchBar/>
                        </div>
                        <div className={'Main__content'}>
                            <div className={'Main__content-subtitle'}>
                                <SubTitle>Популярное&#129321;</SubTitle>
                            </div>
                            <div>
                                <ItemBox />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Main.propTypes = {};

export default Main;
