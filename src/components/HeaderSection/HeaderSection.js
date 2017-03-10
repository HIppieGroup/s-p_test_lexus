import React, { Component } from 'react';

import { NavigationButtons } from '../';

class HeaderSection extends Component {
  render() {
    return (
      <div>
        <h1>Встречайте lexus es</h1>
        <p>
          Новый элегантный Lexus ES подарит Вам комфорт, превосходящий ваши ожидания. Мы увеличили
          пространство интерьера, чтобы вы могли насладиться лучшими в классе характеристиками.   
          Впервые доступный в версии с гибридным приводом, вобравший в себя новейшие технологии, 
          Lexus ES является лучшим из когда-либо созданных нами седанов бизнес-класса
        </p>
        <NavigationButtons />
      </div>
    )
  }
}

export default HeaderSection;