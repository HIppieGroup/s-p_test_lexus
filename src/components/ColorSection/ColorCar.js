import React, { Component } from 'react';

import './styles/color-car.sass';

class ColorSection extends Component {
  render() {
    return (
      <div className={`color-car ${this.findCar().imgClass} ${ this.props.car ? 'color-car__left' : 'color-car__right'}`} 
        onMouseMove={this.onBebe.bind(this)}
        ref="colorCar" 
        >
        <div className="color-car--shadow"/>
      </div>
    )
  }

  findCar() {
    return this.props.data.find( item => item.isEnabled === true);
  }


  onBebe(e){ 
    const car = this.refs.colorCar.offsetLeft + (this.refs.colorCar.clientWidth/2);
    if ((e.clientX) < car){
      this.props.carChange(true);
    } else {
      this.props.carChange(false);
    }
  }
}

export default ColorSection;

// className={`color-car ${this.findCar().imgClass}`}
//1200
//0