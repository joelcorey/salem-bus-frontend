import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {
  handleSubmitSearch = ev => {

  }

  render() {
    return (
      <div className="search-menu">
        <form>
          <input type="text" id="first-name" placeholder="Enter a stop id" />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}