import React, { Component } from 'react'
import BusContext from '../../contexts/BusContext'
import BusStopApiService from '../../services/bus-stop-api-service'
import { Section } from '../../components/Utils/Utils'
import StopListItem from '../../components/StopListItem/StopListItem'

export default class StopListPage extends Component {
  static contextType = BusContext

  componentDidMount() {
    this.context.clearError()
    BusStopApiService.getStops()
      .then(this.context.setStopList)
      .catch(this.context.setError)
  }

  renderStops() {
    const { stopList = [] } = this.context
    stopList.sort((a,b) => (a.arrival > b.arrival) ? 1 : -1)
    return stopList.map(stop =>
      
      <StopListItem
        key={stop.id}
        stopId={stop.stopId}
        stopCode={stop.stopCode}
        stopName={stop.stopName}
        stopDesc={stop.stopDesc}
        stopLat={stop.lat}
        stopLon={stop.lon}
        arrival={stop.arrival}
        departure={stop.departure}
        tripRouteId={stop.tripRouteId}
        routeShortName={stop.routeShortName}
        routeLongName={stop.routeLongName}
      />
    )
  }

  render() {
    const { error } = this.context
    return (
      <Section list className='ArticleListPage'>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderStops()}
      </Section>
    )
  }
}
