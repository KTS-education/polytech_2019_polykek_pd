import React, {Component} from 'react';
import "./SearchBar.css"
import Menu from "./Menu";

class SearchBar extends Component {

    state = {
        dropMenu: false
    };

    onKeyPressEnter = (e) => {
        if (e.charCode === 13) {
            this.setState({dropMenu: true});
            console.log('press', e)
        }
    };

    onSelectInput = (e) => {
        if (e.target.value) {
            this.setState({dropMenu: true});
        } else {
            this.setState({dropMenu: false});
        }
        console.log('select', e);

    };

    onBlurInput = (e) => {
        // this.setState({dropMenu: false});
        console.log('blur', e);
    };

    render() {
        return (
            <div onBlur={this.onBlurInput} className="SearchBar__box">
                <input onSelect={this.onSelectInput} onKeyPress={this.onKeyPressEnter} className="SearchBar__input" type="string"/>
                <Menu show={this.state.dropMenu} />
            </div>
        );
    }
}

export default SearchBar;
