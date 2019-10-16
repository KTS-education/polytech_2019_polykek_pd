import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./ItemBox.css"
import Masonry from "react-masonry-component";
import Item from "./Item";

import Item1 from "../../img/item1.jpg"
import Item2 from "../../img/item2.jpg"
import Item3 from "../../img/item3.jpg"

class ItemBox extends Component {
    render() {
        const items = [
            {
                title: "iPhone",
                cost: 123312,
                description: "Очень длинное описание  Равным образом, укрепление и развитие внутренней структуры напрямую зависит от благоприятных перспектив.Равным образом, укрепление и развитие внутренней структуры напрямую зависит от благоприятных перспектив.Равным образом, укрепление и развитие внутренней структуры напрямую зависит от благоприятных перспектив.Равным образом, укрепление и развитие внутренней структуры напрямую зависит от благоприятных перспектив.",
                img: Item3,
            },
            {
                title: "Google Pixel",
                cost: 123765,
                description: "Равным образом, укрепление и развитие внутренней структуры напрямую зависит от благоприятных перспектив.Равным образом, укрепление и развитие внутренней структуры напрямую зависит от благоприятных перспектив.",
                img: Item2,
            },
            {
                title: "Google Pixel",
                cost: 123765,
                description: "werwerwet",
                img: Item2,
            },
            {
                title: "Google Pixel",
                cost: 123765,
                description: "werwerwet",
                img: Item2,
            },
            {
                title: "Google Pixel",
                cost: 123765,
                description: "werwerwet",
                img: Item2,
            },
            {
                title: "Google Pixel",
                cost: 123765,
                description: "werwerwet",
                img: Item2,
            },
            {
                title: "Samsung Galaxy",
                cost: 123978,
                description: "qqzsdasdqweqweasdawee",
                img: Item1,
            }
        ];

        return (
            <div className="ItemBox__box">
                <Masonry>
                    {items.map((item,index) => {
                        return (
                            <Item key={index} item={item} />
                        )
                    })}
                </Masonry>

            </div>
        );
    }
}

ItemBox.propTypes = {};

export default ItemBox;
