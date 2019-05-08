import React, { Component } from 'react'
import BusContext from '../../contexts/BusContext'
import { Section } from '../../components/Utils/Utils'
import { Button, Input, Select } from '../Utils/Utils'
import './LateBusForm.css'
export default class LateBusPage extends Component {
  static contextType = BusContext
  
  state = { 
    error: null,
  }

  render() {
    const { error } = this.state 
    
    // build routes dropdown
    // if routeShortName matches pass in value, set to selected
    const routes = this.props.routes.map(route => {
      if(this.props.routeShortName == route.routeShortName) {
        return <option selected value={route.routeShortName}>{route.routeShortName}</option>
      } else {
        return <option value={route.routeShortName}>{route.routeShortName}</option>
      }
    })

    return (
      <form
        className='LateBusForm'
        onSubmit={this.props.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='stop-id'>
          <label htmlFor='stop_id'>
            Stop ID
          </label>
          <Input
            required
            name='stopId'
            type='text'
            id='stopId'
            value={this.props.stopId}
            disabled
            onChange={this.props.handleChangeStopId}
          />
        </div>
        <div className='stop-id'>
          <label htmlFor='route'>
            Route
          </label>
          <select
            required
            name='route'
            id='route'
            className="Select"
            disabled
            onChange={this.props.handleChangeRouteName}
          >
            {routes}
          </select>
        </div>
        <hr />
        <div className=''>
          <label htmlFor='route'>
            How late is the bus?
          </label>
          <select
            required
            name='route'
            id='route'
            className="Select"
            onChange={this.props.handleChangeDelay}
          >
            <option value="10-min-late">10 minutes late</option>
            <option value="0-min-late" selected>On time</option>
            <option value="10-min-early">10 minutes early</option>
          </select>
        </div>
        
        <Button type='submit'>
          Submit
        </Button>
      </form>
    )
  }
}