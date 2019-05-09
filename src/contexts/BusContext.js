import React, { Component } from 'react'
import TokenService from '../services/token-service';

const BusContext = React.createContext({
  // stopsList: [],
  // routesList: [],
  // error: null,
  // authToken: TokenService.getAuthToken(),
  // setError: () => {},
  // clearError: () => {},
  // setStopList: () => {},
  // setAuthToken: () => {},
  // setLoggedIn: () => {}
})
export default BusContext

export class BusProvider extends Component {
  state = {
    stopList: [],
    routeList: [],
    delaysList: [],
    authToken: TokenService.getAuthToken(),
    userName: null,
    error: null
  }

  setDelaysList = delaysList => {
    this.setState({ delaysList })
  }

  setUserName = userName => {
    this.setState({ userName })
  }
  
  setAuthToken = authToken => {
    this.setState({ authToken })
  }

  setStopList = stopList => {
    this.setState({ stopList })
  }

  setRouteList = routeList => {
    this.setState({ routeList })
  }

  setError = error => {
    console.log(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      stopList: this.state.stopList,
      routeList: this.state.routeList,
      delaysList: this.state.delaysList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setStopList: this.setStopList,
      setRouteList: this.setRouteList,
      setAuthToken: this.setAuthToken,
      setDelaysList: this.setDelaysList,
      authToken: this.state.authToken
    }

    return (
      <BusContext.Provider value={value}>
        {this.props.children}
      </BusContext.Provider>
    )
  }
}