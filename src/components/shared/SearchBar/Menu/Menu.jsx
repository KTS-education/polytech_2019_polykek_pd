import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./Menu.css"
import MenuItem from "./MenuItem";

class Menu extends Component {
    render() {
        const {show, data} = this.props;

        return (
            <div>
                {show && data &&
                <div className={'Menu__box'}>
                    {data.map((item, index) => {
                        return <MenuItem key={index}>{item.value}</MenuItem>
                    })}
                </div>}
            </div>
        );
    }
}

Menu.propTypes = {
    show: PropTypes.bool.isRequired,
    data: PropTypes.array
};


export default Menu;
