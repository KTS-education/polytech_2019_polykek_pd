import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./Item.css"
import Button from "../../Button/Button";
import Avatar from "../../Avatar";
class Item extends Component {
    render() {
        const { title, img, cost, description } = this.props.item;

        const {secondary, withImg }= this.props;
        const classNames = secondary ? "secondary": "primary";



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
                <div className={`Item__button ${withImg ? "Item__button-with-img" : ""}`}>
                    <Button style={classNames} width={200}>Не подарю</Button>
                    <Avatar img="https://loremflickr.com/240/240" size={32}/>
                </div>
            </div>
        );
    }
}

Item.propTypes = {
    item: PropTypes.object
};

export default Item;
