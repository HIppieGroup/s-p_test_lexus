import React, { Component } from 'react';

import './styles/feature-item.sass'

class FeatureItem extends Component {
  render() {
    const {data} = this.props;
    return (
      <li className="feature-item">
        <a href="#" 
          ref={(a)=> {this.refBtn = a}}
          className={`feature-item--btn ${data.classImg} ${data.isEnabled ? 'feature-item--btn__active' : ''}`}
          onClick={(e)=>{e.preventDefault(); this.props.videoEnabled(data.id)}}
        >&nbsp;</a>
        <span className="feature-item--description">{data.description}</span>
      </li>
    )
  }

  componentDidMount(){
    {this.props.videoInit(this.props.data.id, this.refBtn.offsetLeft)}
  }
  
}

export default FeatureItem;