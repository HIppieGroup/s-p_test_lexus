import React, { Component } from 'react';

import './styles/features-video.sass';

class FeatureVidio extends Component {
  render() {
    const {data, videoDisabled, videoEnabled, featureLength } = this.props
    return (
      <div className={`feature-video ${data ? 'feature-video__open' : '' }`}>
        <a href="#" 
          className="feature-video--btn-close" 
          onClick={ (e) => { e.preventDefault(); videoDisabled(data.id)} }
          >+</a>
        <video className="feature-video--video">
          <source src={data? data.url : ''} type="video/mp4" />
          <source src={data? data.url : ''} type="video/ogg" />
        </video>
        <ul className="feature-video--nav">
          <li><a href="#" 
            className="feature-video--arow feature-video--arow__pre"
            onClick={(e)=>{e.preventDefault(); this.prefVideo(data, featureLength)}}
            >&nbsp;</a></li>
          <li><a href="#" 
            className="feature-video--arow feature-video--arow__next"
            onClick={(e)=>{e.preventDefault(); this.nextVideo(data, featureLength)}}
            >&nbsp;</a></li>
        </ul>
      </div>
    )
  }

  prefVideo(data, featureLength){
    const pref = data.id - 1
    if (pref < 0){
      this.props.videoEnabled(featureLength-1)
    } else {
      this.props.videoEnabled(pref)
    }
  }
    
  nextVideo(data, featureLength){
    const next = data.id + 1
    if (next > (featureLength-1)){
      this.props.videoEnabled(0)
    } else {
      this.props.videoEnabled(next)
    }
  }

}

export default FeatureVidio;