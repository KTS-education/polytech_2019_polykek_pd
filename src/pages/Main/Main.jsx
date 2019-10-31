import React, {Component} from 'react';
import Header from "components/Header/Header";
import Title from "components/shared/Title";
import SearchBar from "components/shared/SearchBar/SearchBar";
import SubTitle from "components/shared/SubTitle";
import ItemBox from "components/shared/ItemBox";

import "./Main.css"

/* Тестовые данные */
import profile from "../../data/profile";
import friends from "../../data/friends";
import WishListItems from "../../data/WishListItems";

class Main extends Component {
    render() {
        return (
            <div>
                <Header profile={profile} friends={friends}/>
                <div>
                    <div className={'Main__TopBox'}>
                        <div className={'Main__Title'}>
                            <Title>Wishlist
                                <span role="img"
                                      aria-label="Smiling Face With Heart-Shaped Eyes">
                                &#128525;</span>
                            </Title>
                        </div>
                        <div className={'Main__SearchBar'}>
                            <SearchBar/>
                        </div>
                        <div className={'Main__content'}>
                            <div className={'Main__content-subtitle'}>
                                <SubTitle>Популярное
                                    <span role="img"
                                          aria-label="Grinning Face with Star Eyes">
                                        &#129321;
                                    </span>
                                </SubTitle>

                            </div>
                            <div>
                                <ItemBox items={WishListItems}/>
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
