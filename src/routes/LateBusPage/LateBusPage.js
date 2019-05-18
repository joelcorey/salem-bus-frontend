import React, { Component } from 'react'
import BusContext from '../../contexts/BusContext'
import BusStopApiService from '../../services/bus-stop-api-service'
import { Section } from '../../components/Utils/Utils'
import LateBusForm from '../../components/LateBusForm/LateBusForm'
import './LateBusPage.css'

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
    routeShortName: null,
    delay: 0
  }

  componentDidMount() {
    this.context.clearError()
    const { stopId,routeShortName } = this.props.location.state
    this.setState({ stopId, routeShortName })
    
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
    const { history } = this.props
    event.preventDefault()
    let delay = {
      stop_number: this.state.stopId,
      route_short_name: this.state.routeShortName,
      delay_time: this.state.delay,
    }
    BusStopApiService.postDelay(delay)
    history.push('/')
  }

  render() {
    console.log(this.context.routeList)
    return (
      <Section className='LateBusPage'>
        <LateBusForm 
          routes={this.context.routeList}
          stopId={this.state.stopId}
          routeShortName={this.state.routeShortName}
          handleChangeStopId={this.handleChangeStopId}
          handleChangeRouteName={this.handleChangeRouteName}
          handleChangeDelay={this.handleChangeDelay}
          handleSubmit={this.handleSubmit}
        />
      </Section>
    )
  }
}