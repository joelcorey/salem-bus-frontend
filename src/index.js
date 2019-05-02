import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { BusProvider } from './contexts/BusContext'
import App from './components/App/App'

ReactDOM.render(
  <BrowserRouter>
    <BusProvider>
      <App />
    </BusProvider>
  </BrowserRouter>,
  document.getElementById('root')

)