import React, { Component } from 'react';

import ColorNav from './ColorNav';
import ColorCar from './ColorCar';

import './styles/color-section.sass';

class ColorSection extends Component {
  render() {
    // const thisCar = this.props.data.find(item => )
    return (
      <div className="wrap-content color-section">
        <ColorNav data={this.props.data} colorChange={this.props.colorChange.bind(this)}/>
        <h2 className="color-section--header">Цвета</h2>
        <ColorCar data={this.props.data} carChange={this.props.carChange.bind(this)} car={this.props.car}/>
      </div>
    )
  }
}

export default ColorSection;