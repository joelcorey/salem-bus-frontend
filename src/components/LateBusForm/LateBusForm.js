import React, { Component } from 'react'
import BusContext from '../../contexts/BusContext'
import { Section } from '../../components/Utils/Utils'
import { Button, Input } from '../Utils/Utils'

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
      <Section list className='LateBusPage'>
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
              disabled
              onChange={this.props.handleChangeRouteName}
            >
              {routes}
            </select>
          </div>
          <div className=''>
            <label htmlFor='route'>
              Delay
            </label>
            <select
              required
              name='route'
              id='route'
              // onChange={this.props.handleChangeDelay}
            >
              <option>10 minutes late</option>
              <option>5 minutes late</option>
              <option>On time</option>
              <option>5 minutes early</option>
              <option>10 minutes early</option>
            </select>
          </div>
          
          <Button type='submit'>
            Submit
          </Button>
        </form>
      </Section>
    )
  }
}