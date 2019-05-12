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

  fetchCurrentDateHour(){
    let currentDate = new Date().toLocaleString({timeZone: "America/Los_Angeles"})
    let splitTime = currentDate.split(" ")
    //console.log(splitTime[1])
    let hour = splitTime[1].split(":")
    return hour[0]
  }

  fetchStopHour(time) {
    time = time.split(":")
    //convert form UTC to PST / west coast US time
    let adjust = time[0] - 7
    return adjust
  }

  compareCurrentTimeToStop(time, stopTime) {
    // console.log(parseInt(time) - parseInt(stopTime))
    // console.log(parseInt(time))
    // console.log(parseInt(stopTime))
    if (parseInt(time) === parseInt(stopTime)) {
      return true
    }
    else {
      return false
    }
  }

  renderStops() {
    
    const { stopList = [] } = this.context
    const delaysList = this.context.delaysList
    let currentHour = this.fetchCurrentDateHour()

    stopList.sort((a,b) => (a.arrival > b.arrival) ? 1 : -1)
    
    const seen = new Set()
    const filteredStops = stopList.filter(stop => {
      const duplicate = seen.has(stop.routeShortName);
      seen.add(stop.routeShortName);
      return !duplicate;
    });
    
    filteredStops.map((stop, reg) => {
      for (let i = 0; i < delaysList.length; i++) {

        // a temporary solution for only getting delays within the current hour
        // does not yet account for minutes
        let time = /[01][0-9]:[0-5][0-9]:[0-5][0-9]/g.exec(delaysList[i].dateCreated)
        let hour
        let stopHour
        let compare

        if (time) {
          hour = this.fetchCurrentDateHour()
          stopHour = this.fetchStopHour(time[0])
          compare = this.compareCurrentTimeToStop(hour, stopHour)
        }
       
        //if (stop.routeShortName === delaysList[i].routeShortName) {
        if (stop.routeShortName === delaysList[i].routeShortName && compare === true) {
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
