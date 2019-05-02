import React, { Component } from 'react'

const BusContext = React.createContext({
  stopsList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setStopList: () => {},
})
export default BusContext