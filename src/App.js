import React, { Component } from 'react';
import './App.css';

import Loading from './component/Loading/Loading';

class App extends Component {
  state = {
    isLoading: true,
  }
  render() {
    
    return (
      <>
        <Loading loading={this.state.isLoading} />
        <main className="App">
          
          hi
        </main>
      </>

    );
  }
  
}

export default App;