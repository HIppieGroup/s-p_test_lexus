import React, { Component } from 'react';

import { NavigationButtons } from '../';

import './styles/header-section.sass';

class HeaderSection extends Component {
  render() {
    return (
      <div className="wrap-content header-section">
        <div className="header-section--content">
          <h1 className="header-section--header" >Встречайте lexus es</h1>
          <p className="header-section--description">
            Новый элегантный Lexus ES подарит Вам комфорт, превосходящий ваши ожидания. Мы увеличили
            пространство интерьера, чтобы вы могли насладиться лучшими в классе характеристиками.   
            Впервые доступный в версии с гибридным приводом, вобравший в себя новейшие технологии, 
            Lexus ES является лучшим из когда-либо созданных нами седанов бизнес-класса
          </p>
          <div className="header-section--nav">
            <NavigationButtons iner='__over-nav'/>
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderSection;