import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './StopListItem.css'

export default class StopListItem extends Component {
  render() {
    const { stop } = this.props
    return (
      <div className='StopListItem'>
       
        <h4>
          {this.props.stopId} - {this.props.routeShortName} - {this.props.stopName}
        </h4>
        {this.props.stopDesc} <br />
        Reported arrival: {this.props.arrival}
        <hr />    
      </div>
    )
  }
}

