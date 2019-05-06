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
    },
  }

  // componentDidMount() {
  //   this.context.clearError()
  //   BusStopApiService.getStops()
  //     .then(this.context.setStopList)
  //     .catch(this.context.setError)
  // }

  componentDidMount() {
    //this.context.clearError()
    BusStopApiService.getRoutes()
      .then(this.context.setRouteList)
      .catch(this.context.setError)
  }

  handleLateBusForm = ev => {
    console.log('hi')
  }

  render() {
    //console.log(this.context)
    return (
      <Section className='LateBusPage'>
        <LateBusForm 
          handleLateBus={this.handleLateBusForm}
          routes={this.context.routesList}
        />
      </Section>
    )
  }
}