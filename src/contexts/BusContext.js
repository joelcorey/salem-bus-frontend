import React, { Component } from 'react'

const BusContext = React.createContext({
  stopsList: [],
  routesList: [],
  error: null,
  authToken: null,
  setError: () => {},
  clearError: () => {},
  setStopList: () => {},
  // setAuthToken: () => {},
  // setLoggedIn: () => {}
})
export default BusContext

export class BusProvider extends Component {
  state = {
    stopList: [],
    routeList: [],
    authToken: null,
    error: null
  }

  // setAuthToken = authToken => {
  //   this.setState({ authToken })
  // }

  setStopList = stopList => {
    this.setState({ stopList })
  }

  setRouteList = routeList => {
    console.log(routeList)
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
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setStopList: this.setStopList,
      setRouteList: this.setRouteList,
      // setAuthToken: this.setAuthToken,
      // setLoggedIn: this.setLoggedIn
    }

    return (
      <BusContext.Provider value={value}>
        {this.props.children}
      </BusContext.Provider>
    )
  }
}