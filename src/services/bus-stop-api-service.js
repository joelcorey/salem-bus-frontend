//import TokenService from './token-service'
import config from '../config'

const BusStopApiService = {
  getStops() {
    return fetch(`${config.API_ENDPOINT}/stops`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getRoutes() {
    return fetch(`${config.API_ENDPOINT}/routes`, {
      headers: {
      }
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()  
      )
  },
  getTimesAtStop(stopId, time) {
    // Non-exact endpoint for at this time and after this time
    return fetch(`${config.API_ENDPOINT}/stops/times/${stopId}/${time}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postDelay(delay) {
    return fetch(`${config.API_ENDPOINT}/delays`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(delay),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

}

export default BusStopApiService