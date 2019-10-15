import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./ItemBox.css"
import Item1 from "../../img/item1.jpg"
import Item2 from "../../img/item2.jpg"
import Item3 from "../../img/item3.jpg"
import Item from "./Item";

class ItemBox extends Component {
    render() {
        const items = [
            {
                title: "iPhone",
                cost: 123312,
                description: "Очень длинное описание  Равным образом, укрепление и развитие внутренней структуры напрямую зависит от благоприятных перспектив.Равным образом, укрепление и развитие внутренней структуры напрямую зависит от благоприятных перспектив.Равным образом, укрепление и развитие внутренней структуры напрямую зависит от благоприятных перспектив.Равным образом, укрепление и развитие внутренней структуры напрямую зависит от благоприятных перспектив.",
                img: Item1,
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
                title: "Samsung Galaxy",
                cost: 123978,
                description: "qqzsdasdqweqweasdawee",
                img: Item3,
            }
        ];
        return (
            <div className="ItemBox__box">
                {items.map((item,index) => {
                    return (
                        <Item key={index} item={item} />
                    )
                })}
            </div>
        );
    }
}

ItemBox.propTypes = {};

export default ItemBox;
