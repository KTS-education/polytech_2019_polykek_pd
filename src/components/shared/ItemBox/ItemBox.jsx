import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./ItemBox.css"
import Masonry from "react-masonry-component";
import Item from "./Item";

class ItemBox extends Component {
    render() {
        const { items } = this.props;

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

ItemBox.propTypes = {
    items: PropTypes.array
};

export default ItemBox;
