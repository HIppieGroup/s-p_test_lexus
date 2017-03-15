import React, { Component } from 'react';

import './styles/color-nav.sass'

class ColorNav extends Component {
  render() {
    return (
      <div className="color-nav">
        {this.renderItem()}
      </div>
    )
  }

  renderItem(){
    return this.props.data.map((item,index)=> 
      <li key={index} className="color-nav--item">
      <div className="color-nav--btn-over">{item.header}</div>
      <a href="#" 
      className={`color-nav--btn ${item.colorClass} ${item.isEnabled ? 'color-nav--btn__active': ''}`}
      onMouseEnter={(e)=>{e.preventDefault(); this.props.colorChange(item.id)}}
      onClick={(e)=>{e.preventDefault()}}
      >&nbsp;</a></li> )
  }
}

export default ColorNav;


