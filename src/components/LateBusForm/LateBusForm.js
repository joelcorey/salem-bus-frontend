import React, { Component } from 'react'
import BusContext from '../../contexts/BusContext'
import { Section } from '../../components/Utils/Utils'
import { Button, Input } from '../Utils/Utils'

export default class LateBusPage extends Component {
  static contextType = BusContext
  
  state = { error: null }

  componentDidMount() {
    console.log(this.props.routes)
  }

  handleBuildRouteList() {
    
  }

  handleLateBusForm = ev => {
    console.log('hi')
    this.props.handleLateBus()
  }

  render() {
    const { error } = this.state 
    this.handleBuildRouteList()
    return (
      <Section list className='LateBusPage'>
        <form
          className='LateBusForm'
          onSubmit={this.handleLateBusForm}
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
              id='stop_id'>
            </Input>
          </div>
          <div className='user_name'>
            <label htmlFor='route'>
              Route
            </label>
            <select
              required
              name='user_name'
              id='route'>
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