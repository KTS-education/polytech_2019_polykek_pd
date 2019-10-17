import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./Item.css"
import Button from "../../Button/Button";

class Item extends Component {
    render() {
        const {item} = this.props;
        return (
            <div className="Item__box">
                <img className="Item__img" src={item.img} alt={item.title}/>
                <div className="Item__title">
                    <span>{item.title}</span>
                </div>
                <div>
                    <span className="Item__cost">{item.cost}</span>
                </div>
                <div>
                    <p className="Item__description">{item.description}</p>
                </div>
                <div className="Item__button">
                    <Button width={200} style="primary">Добавить в избранное</Button>
                </div>
            </div>
        );
    }
}

Item.propTypes = {
    item: PropTypes.object
};

export default Item;
