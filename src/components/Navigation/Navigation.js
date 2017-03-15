import React, { Component } from 'react';
import { NavigationButtons } from '../';
import { Link } from 'react-scroll';
import './styles/navigation.sass'

class Navigation extends Component {
  render() {
    return (
      <div className="navigation-mnu">
        <div className="navigation-mnu--content">
          <span className="navigation-mnu--header">Новый ES</span>
          <Link to="top" spy={true} smooth={true} offset={-250} duration={500} className="navigation-mnu--logo"></Link>
        </div>
        <div className="navigation-mnu--bottom">
          <NavigationButtons />
        </div>
      </div>
    )
  }
}

export default Navigation;