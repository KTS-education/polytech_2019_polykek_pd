import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from "components/shared/Button/Button";
import "./Item.scss"

class Item extends Component {
    render() {
        const { title, img, cost, description } = this.props.item;

        return (
            <div className="Item__box">
                <img className="Item__img" src={img} alt={title}/>
                <div className="Item__title">
                    <span>{title}</span>
                </div>
                <div>
                    <span className="Item__cost">{cost}</span>
                </div>
                <div>
                    <p className="Item__description">{description}</p>
                </div>
                <div className="Item__button">
                    <Button fill>Добавить в избранное</Button>
                </div>
            </div>
        );
    }
}

Item.propTypes = {
    item: PropTypes.object
};

export default Item;
