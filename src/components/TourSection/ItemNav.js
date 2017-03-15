import React, { Component } from 'react';

import './styles/tour-item-nav.sass';

class ItemNav extends Component {
  render() {
    return (
      <div className="tour-nav">
        <button className="tour-nav--arow tour-nav--arow__prev" onClick={this.onArow.bind(this, 'PREF')}>&#8249;</button>
        <ul className="tour-nav--list-item">
          {this.renderButtonNav()}
        </ul>
        <button className="tour-nav--arow tour-nav--arow__nex" onClick={this.onArow.bind(this, 'NEXT')}>&#8250;</button>
      </div>
    )
  }
  renderButtonNav() {
    return this.props.data.map((item,index) => 
      <li key={index} className="tour-nav--item">
        <div className={item.isHovered ? `tour-nav--btn-over tour-nav--btn-over__active` : 'tour-nav--btn-over'} >{item.iner[0].header}</div>
        <a href="#" 
          className={`tour-nav--btn ${item.isEnabled ? 'tour-nav--btn__active' : '' }`} 
          onClick={(e) => {e.preventDefault(); this.props.tourEnabled(item.id);}}>
          {item.id} 
        </a>
      </li> )
  }

  onArow(action){
    switch(action){
      case 'NEXT':
       const next = this.props.data.find(item => item.isEnabled === true).id + 1;
       if (next == this.props.data.length){
        this.props.tourEnabled(0)
       } else {
        this.props.tourEnabled(next)
       }
      break;

      case 'PREF':
       const pref = this.props.data.find(item => item.isEnabled === true).id - 1;
       if (pref < 0){
        this.props.tourEnabled(this.props.data.length-1)
       } else {
        this.props.tourEnabled(pref)
       }
      break;
    }
  }

}

export default ItemNav;