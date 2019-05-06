import React, { Component } from 'react'
import './Menu.css'

export default class Menu extends Component {

  render() {
    return(
      <div className="menu">
        <div id="myNav" class="menu-overlay">
          <div class="menu-overlay-content">
            <a href="#">Search</a>
            <a href="#">Late bus</a>
            <a href="#">Info</a>
          </div>
          <a href="#">&times;</a>
        </div>
        
        <a href="javascript:void(0)" class="menu-overlay-open-close-button" onclick="closeNav()">&#9776;</a>

      </div>
    )
  }
}