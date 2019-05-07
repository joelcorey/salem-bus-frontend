import React, { Component } from 'react'
import BusContext from '../../contexts/BusContext'
import BusStopApiService from '../../services/bus-stop-api-service'
import { Section } from '../../components/Utils/Utils'
import LateBusForm from '../../components/LateBusForm/LateBusForm'

export default class LateBusPage extends Component {
  static contextType = BusContext

  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    }
  }

  state={
    stopId: null,
    route: null,
    delay: null
  }

  componentDidMount() {
    this.context.clearError()
    BusStopApiService.getRoutes()
      .then(this.context.setRouteList)
      .catch(this.context.setError)
  }

  handleChangeStopId = (event) => {
    this.setState({ stopId: event.target.value })
  }

  handleChangeRouteName = (event) => {
    this.setState({ route: event.target.value })
  }

  handleChangeDelay = (event) => {
    this.setState({ delay: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(`${this.state.stopId} ${this.state.route} ${this.state.delay}`)
  }

  render() {
    
    return (
      <Section className='LateBusPage'>
        <LateBusForm 
          routes={this.context.routeList}
          handleChangeStopId={this.handleChangeStopId}
          handleChangeRouteName={this.handleChangeRouteName}
          handleChangeDelay={this.handleChangeDelayb}
          handleSubmit={this.handleSubmit}
        />
      </Section>
    )
  }
}