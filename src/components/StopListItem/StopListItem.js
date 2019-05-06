import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './StopListItem.css'

export default class StopListItem extends Component {
  render() {
    const { stop } = this.props
    return (
      <div className='StopListItem'>
        <header className=''>
          <h4>
            Bus stop id: {this.props.stopId} <br />
            Bus stop name: {this.props.stopName}
          </h4>
          Stop desc: {this.props.stopDesc}
        </header>
        
      </div>
    )
  }
}

