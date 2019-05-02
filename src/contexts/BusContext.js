import React, { Component } from 'react'

const BusContext = React.createContext({
  stopsList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setStopList: () => {},
})
export default BusContext

export class BusProvider extends Component {
  state = {
    stopList: [],
    error: null
  }

  setStopList = stopList => {
    console.log('this is a string')
    this.setState({ stopList })
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
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setStopList: this.setStopList,
    }

    return (
      <BusContext.Provider value={value}>
        {this.props.children}
      </BusContext.Provider>
    )
  }
}