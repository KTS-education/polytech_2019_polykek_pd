/* eslint linebreak-style: ["error", "windows"] */
import React, { Component } from 'react';
import './Spinner.scss';
import img from './img/Oval.svg';

class Spinner extends Component {
  render() {
    return (
      <img className="Spinner__spinner" src={img} alt="Loading" />
    );
  }
}

export default Spinner;
