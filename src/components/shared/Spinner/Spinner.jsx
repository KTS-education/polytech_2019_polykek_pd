import React, {Component} from 'react';
import "./Spinner.css"
import img from "./img/Oval.svg"

class Spinner extends Component {
    render() {
        return (
            <div>
                <img className={'Spinner__spinner'} src={img} alt={'Loading'}/>
            </div>
        );
    }
}

Spinner.propTypes = {};

export default Spinner;
