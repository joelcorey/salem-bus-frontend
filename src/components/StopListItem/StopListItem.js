import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './StopListItem.css'
import BusContext from '../../contexts/BusContext'

export default class StopListItem extends Component {
  static contextType = BusContext

  delay(delay) {
    if (delay) {
      return ( <p>'Delay: ' + delay</p> )
    }
    return
  }
  
  render() {
    
    return (
      <div className='StopListItem'>
        
        <div className="StopInformation">
          <h4>
            {this.props.stopId} - {this.props.routeShortName} - {this.props.stopName}
          </h4>
          {this.props.stopDesc}
          Reported arrival: {this.props.arrival}
        </div>
        <Link 
          className="LinkLateBus"
          to={{
            pathname: '/late',
            state: {
              stopId: this.props.stopId,
              routeShortName: this.props.routeShortName,
            }
          }}
        >
          Report late bus
        </Link>
        <br />
        
        {this.delay(this.props.delay)}
           
      </div>
    )
  }
}

