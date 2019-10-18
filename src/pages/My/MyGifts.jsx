import React from "react";
import Header from "../../components/Header/Header"
import Avatar from "../../components/shared/Avatar"
import Title from "../../components/shared/Title"
import Button from "../../components/shared/Button";
import ItemBox from "../../components/shared/ItemBox"
import profile from "../../data/profile";
import friends from "../../data/friends";
import "./MyGifts.css"
import WishListItems from "../../data/WishListItems";
import Masonry from "react-masonry-component";
import Item from "../../components/shared/ItemBox/ItemBox";

class MyGifts extends React.Component {



    render() {
        return (
            <div className="myGifts">
                <Header profile={profile} friends={friends} />
                <div className="myGifts__info">
                    <Avatar img={profile.img} size={150}/>

                    <div className="right">
                        <Title children="Ким хуим"/>
                        <div className="info__link-row">
                            <a href="123" className="active">Хочу получить</a>
                            <a href="123" className="">Хочу подарить</a>
                        </div>
                        <Button width={125} children="Поделиться"/>

                    </div>

                </div>
                <ItemBox items={WishListItems} secondary withImg/>

            </div>

        )
    }
}

export default MyGifts;