import React, { Component } from 'react';

import FeatureList from './FeatureList';
import FeatureVideo from './FeatureVideo';

import './styles/feature-section.sass'

class FeaturesSection extends Component {
  render() {
    return (
      <div className="wrap-content feature-section">
        <h2 className="feature-section--header">особенности</h2>
        <FeatureList 
          data={this.props.data} 
          videoEnabled={this.props.videoEnabled.bind(this)}
          videoInit={this.props.videoInit.bind(this)}
          />
        <p className="feature-section--description" >Познакомьтесь поближе с уникальными особенностями Lexus ES</p>
        <FeatureVideo
          data={this.props.data.find(item=>item.isEnabled)} 
          videoDisabled={this.props.videoDisabled.bind(this)}
          videoEnabled={this.props.videoEnabled.bind(this)}
          featureLength={this.props.data.length}
         />
      </div>
    )
  }
}

export default FeaturesSection;