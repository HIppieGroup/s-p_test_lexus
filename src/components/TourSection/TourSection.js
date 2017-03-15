import React, { Component } from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ItemNav from './ItemNav';
import SubItem from './turSubItem';

import './styles/tour-section.sass'

class TourSection extends Component {
  render() {
    return (
      <div className={`tour-section ${this.enabledClass()}`}>
        <div className="tour-section--content tour-section--content__left">
          <h2 className="tour-section--header">Тур</h2>
          <ItemNav data={this.props.data} tourEnabled={this.props.tourEnabled.bind(this)}/>
        </div>
          <div key={this.enabledClass()} className={`tour-section--content tour-section--content__right ${this.enabledClass() !== '' ? 'tour-section--content__active' : '' }`}>
            {this.renderItem()} 
          </div>
      </div>
    )
  }

  enabledClass() {
    const enable = this.props.data.find( item => item.isEnabled === true );
    if (enable) {
      return enable.enableClass
    } else { return ''}
  }

  renderItem() {
    const item = this.props.data.find( item => item.isEnabled === true );
      return  item ? <SubItem data={item} tourSubEnabled={this.props.tourSubEnabled.bind(this)}/> : ''
  }
}

export default TourSection;