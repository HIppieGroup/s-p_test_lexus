import React, { Component } from 'react';

import FeatureItem from './FeatureItem';

class FeatureList extends Component {
  render() {
    

    return (
      <div>
        <ul ref="featureList" className="feature-section--list" style={this.style()}>
          {this.renderItem()}
        </ul>
      </div>
    )
  }

  renderItem(){
    return this.props.data.map((item,index) => {
      
      return <FeatureItem 
        data={item} 
        key={index} 
        videoEnabled={this.props.videoEnabled.bind(this)}
        videoInit={this.props.videoInit.bind(this)}
        />})
  }

  style() {
    const offsetItem = this.props.data.find(item=> item.isEnabled == true) ? this.props.data.find(item=> item.isEnabled == true).offsetLeft : '' ;
    const featureList = this.refs.featureList ? this.refs.featureList.clientWidth : ''

    if (this.props.data.find(item=> item.isEnabled == true) ) {
      return {
        transform: `translateX( ${(featureList/1.9)-offsetItem}px )`,
        transitionDelay: '0s' 
      }
    }
      return {}
  }
}

export default FeatureList;