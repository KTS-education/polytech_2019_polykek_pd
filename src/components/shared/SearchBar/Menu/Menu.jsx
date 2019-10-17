import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./Menu.css"
import MenuItem from "./MenuItem";

class Menu extends Component {
    render() {
        const {show} = this.props;

        const data = ['item1', 'item2', 'item3'];

        return (
            <div>
                {(show) ?
                    <div className={'Menu__box'}>
                        {data.map((i, index) => {
                            return <MenuItem key={index}>{i}</MenuItem>
                        })}
                    </div> : ''}
            </div>
        );
    }
}

Menu.propTypes = {
    show: PropTypes.bool.isRequired
};


export default Menu;
