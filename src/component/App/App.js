import React, { Component } from 'react'
import './App.css'

import Loading from '../Loading/Loading'
import Message from '../Message/Message'
import Header from '../Header/Header'

export default class App extends Component {
  state = {
    isLoading: false,
    firstLoad: true,
    message: 'hi',
    
  }
  render() {
    
    return (
      <>
        <Loading loading={this.state.isLoading} />
        <main className="App">
          <Message 
            message={this.state.message}
            isActive={false}
          />
          <Header />
        </main>
      </>

    );
  }
  
}