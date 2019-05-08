import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './StopListItem.css'
import BusContext from '../../contexts/BusContext'

export default class StopListItem extends Component {
  static contextType = BusContext

  render() {
    return (
      <div className='StopListItem'>
       
        <h4>
          {this.props.stopId} - {this.props.routeShortName} - {this.props.stopName}
        </h4>
        {this.props.stopDesc} <br />
        Reported arrival: {this.props.arrival}
        <Link 
          to={{
            pathname: '/late',
            state: {
              stopId: this.props.stopId,
              routeShortName: this.props.routeShortName,
            }
          }}>
          Late bus
          
        </Link>
        <hr />    
      </div>
    )
  }
}

