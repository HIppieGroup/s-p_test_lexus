import React, { Component } from 'react';

import { NavigationButtons } from '../';

class Navigation extends Component {
  render() {
    return (
      <div>
        <div>
          <span>Новый ES</span>
          <a href="#">LExus</a>
        </div>
        <NavigationButtons />
      </div>
    )
  }
}

export default Navigation;