import React, { Component } from 'react'
import BusContext from '../../contexts/BusContext'
import BusStopApiService from '../../services/bus-stop-api-service'
import './SearchBar.css'

export default class SearchBar extends Component {
  static contextType = BusContext
  
  state = { error: null }

  getTime() {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let formatTime = 
      ("0" + h).slice(-2) + ":" + 
      ("0" + m).slice(-2) + ":" + 
      ("0" + s).slice(-2);
    return formatTime;
  }

  handleSubmitSearch = ev => {
    ev.preventDefault() 

    this.context.setLoading(true);

    let stopId = ev.target.stop_id.value 
    BusStopApiService.getTimesAtStop(stopId, this.getTime())
      .then(this.context.setStopList)
      .catch(this.context.setError)
    
    BusStopApiService.getDelays()
      .then(this.context.setDelaysList)
      .catch(this.context.clearError)

    
  }

  render() {
    console.log(this.context)
    return (
      <div className="search-menu">
        <form onSubmit={this.handleSubmitSearch}>
          <input type="text" name="stop_id" placeholder="Enter a stop id" />
          <button type="submit">Find</button>
        </form>
      </div>
    )
  }
}