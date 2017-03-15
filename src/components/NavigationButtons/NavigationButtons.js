import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './styles/navigation-button.sass';

class NavigationButtons extends Component {
  render() {
    return (
      <nav className="navigation-btn">
        <ul className="navigation-btn--list">
          <li className="navigation-btn--li">
            <Link to="tour" spy={true} smooth={true} offset={-180} duration={1000} className="navigation-btn--btn">Видео-тур</Link>
          </li>
          <li className="navigation-btn--li">
            <Link to="feature" spy={true} smooth={true} offset={-180} duration={1000} className="navigation-btn--btn">Особенности</Link>
          </li>
          <li className={`navigation-btn--li navigation-btn--li${this.props.iner}`}>
            <Link to="color" spy={true} smooth={true} offset={-180} duration={1000} className="navigation-btn--btn">Цвета</Link>
          </li>
        </ul>
      </nav>
      )
  }
}

export default NavigationButtons;