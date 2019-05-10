import React, { Component } from 'react'
import BusContext from '../../contexts/BusContext'
//import BusStopApiService from '../../services/bus-stop-api-service'
import { Section } from '../../components/Utils/Utils'
import StopListItem from '../../components/StopListItem/StopListItem'
import SearchBar from '../../components/SearchBar/SearchBar'
import './StopListPage.css'

export default class StopListPage extends Component {
  static contextType = BusContext

  componentDidMount() {
    this.context.clearError()
    // BusStopApiService.getStops()
    //   .then(this.context.setStopList)
    //   .catch(this.context.setError)
  }

  renderStops() {
    
    const { stopList = [] } = this.context
    const delaysList = this.context.delaysList
    //const reg = /([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]/g/
    
    stopList.sort((a,b) => (a.arrival > b.arrival) ? 1 : -1)
    
    const seen = new Set()
    const filteredStops = stopList.filter(stop => {
      const duplicate = seen.has(stop.routeShortName);
      seen.add(stop.routeShortName);
      return !duplicate;
    });

    filteredStops.map((stop, reg) => {
      for (let i = 0; i < delaysList.length; i++) {
        console.log(/[01][0-9]:[0-5][0-9]:[0-5][0-9]/g.exec(delaysList[i].dateCreated))
        if (stop.routeShortName === delaysList[i].routeShortName) {
          stop.delay = delaysList[i].delayTime
        }
        else {
          stop.delay = ''
        }
        
      }
    })
   
    return filteredStops.map(stop =>
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
        delay={stop.delay}
      />
    )
  }

  render() {
    const { error } = this.context
    return (
      <>
        <SearchBar />
        <Section list className='StopsListPage'>
        
          {error
            ? <p className='red'>There was an error, try again</p>
            : this.renderStops()}
        </Section>
      </>
    )
  }
}
