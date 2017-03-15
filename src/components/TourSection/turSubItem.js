import React, { Component } from 'react';

import './styles/tour-sub-item.sass'

class SubItem extends Component {
  render() {
    const { data } = this.props;

    return (
      <div key={data.header} className="tour-sub">
        {this.renderItem(data)}
        <ul className="tour-sub-nav">
          {this.renderButtonNav(data)}
        </ul>
      </div>
    )
  }


  renderButtonNav(data) {
    return data.iner.map((item,index) => 
      <li key={index} className="tour-sub-nav--item">
        <a  href="#" 
            className={`tour-sub-nav--btn ${item.isEnabled ? 'tour-sub-nav--btn__active' : '' }`}
            onClick={ (e) => {e.preventDefault(); this.props.tourSubEnabled( data.id, item.id )}  }
        >&nbsp;</a>
      </li> )
  }

  renderItem(data) {
    const item = data.iner.find(item => item.isEnabled === true);
    return (
      <div key={item.header} className="tour-sub--item">
        <h3 className="tour-sub--header">{item.header}</h3>
        <p  className="tour-sub--description">{item.description} </p>
      </div>
    )
  }
}

export default SubItem;