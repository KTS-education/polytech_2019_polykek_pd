import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Masonry from "react-masonry-component";
import Item from "./Item";
import "./ItemBox.scss"

class ItemBox extends Component {
    render() {
        const {items, secondary, withImg} = this.props;
        return (
            <div className="ItemBox__box">
                <Masonry>
                    {items.map(item => {
                        return (
                            <Item secondary={secondary} key={item.id} item={item} withImg={withImg}/>
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
