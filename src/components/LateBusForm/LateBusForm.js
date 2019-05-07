import React, { Component } from 'react'
import BusContext from '../../contexts/BusContext'
import { Section } from '../../components/Utils/Utils'
import { Button, Input } from '../Utils/Utils'

export default class LateBusPage extends Component {
  static contextType = BusContext
  
  state = { 
    error: null 
  }

  render() {
    const { error } = this.state 

    const routes = this.props.routes.map(route => <option>{route.routeShortName}</option>)
    
    return (
      <Section list className='LateBusPage'>
        <form
          className='LateBusForm'
          onSubmit={this.props.handleLateBus}
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
              id='stop_id'
            >

            </Input>
          </div>
          <div className=''>
            <label htmlFor='route'>
              Route
            </label>
            <select
              required
              name='route'
              id='route'
            >
            {routes}
            </select>
          </div>
          <div className=''>
            <label htmlFor='route'>
              On time
            </label>
            <select
              required
              name='route'
              id='route'
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