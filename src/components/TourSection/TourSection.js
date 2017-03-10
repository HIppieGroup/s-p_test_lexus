import React, { Component } from 'react';


class TourSection extends Component {
  render() {
    return (
      <div>

        <div>
          <h3>комфорт</h3>
          <p></p>
          <ul>
            <li> + </li>
            <li> + </li>
            <li> + </li>
            <li> + </li>
          </ul>
        </div>

        <div>
          <h2>Тур</h2>
          <nav>
            <a href="#"> prev </a>
            <ul>
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a href="#">6</a></li>
            </ul>
            <a href="#"> next </a>
          </nav>
        </div>
        

      </div>
    )
  }
}

export default TourSection;