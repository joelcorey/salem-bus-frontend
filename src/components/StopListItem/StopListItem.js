import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './StopListItem.css'

export default class StopListItem extends Component {
  render() {
    const { stop } = this.props
    return (
      <div className='StopListItem'>
        <header className=''>
          <h2>
            Bus stop id / route etc
          </h2>
          This is a bus stop
        </header>
        
      </div>
    )
  }
}

