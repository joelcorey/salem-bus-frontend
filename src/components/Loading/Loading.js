import React, { Component } from 'react';
import './Loading.css';
import loadingImgJpg from './loading.jpg';
import BusContext from '../../contexts/BusContext';

export default class Loading extends Component {
  static contextType = BusContext;
    
  render() {
    let loading;

    if (this.context.loading) {
      loading = (
        <div className="loading">
          <img src={loadingImgJpg} alt="loading spinner" />
        </div>
      )
    }

    return (
      <>
        {loading}
      </>
    )
  }
  
  
}
