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

  // stopId: stop.stop_id,
  // stopCode: stop.stop_code,
  // stopName: stop.stop_name,
  // stopDesc: stop.stop_desc,
  // stopLat: stop.stop_lat,
  // stopLon: stop.stop_lon,
  // arrival: stop.arrival_time,
  // departure: stop.departure_time,
  // tripRouteId: stop.route_id,
  // routeShortName: stop.route_short_name,
  // routeLongName: stop.route_long_name

  renderStops() {
    const { stopList = [] } = this.context
    console.log(stopList)
    return stopList.map(stop =>
      
      <StopListItem
        key={stop.id}
        stopId={stop.stopId}
        stopCode={stop.stopCode}
        stopName={stop.name}
        stopDesc={stop.stopDesc}
        stopLat={stop.stopLat}
        stopLon={stop.stopLon}
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
