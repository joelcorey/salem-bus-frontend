import TokenService from './token-service'
import config from '../config'

const BusStopApiService = {
  getStops() {
    return fetch(`${config.STOPS_API_ENDPOINT}/`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getTimesAtStop(stopId, time) {
    // Non-exact endpoint for at this time and after this time
    console.log(`${config.API_ENDPOINT}/stops/times/${stopId}/${time}`)
    return fetch(`${config.API_ENDPOINT}/stops/times/${stopId}/${time}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }

}

export default BusStopApiService