import React, { Component } from 'react';
import BusContext from '../../contexts/BusContext';
import busStopPng from './busStopSign002.png';
import './Tutorial.css'

export default class StopImage extends Component {
static context = BusContext;

  render() {

    return (
      <div className='Tutorial'>
        <img src={busStopPng} alt="Bus stop sign example with stop id 444" />

        <p>Enter the stop id number of the stop you are at.</p>
        <p>See the "STOP ID" in the image above as an example.</p>
        <p>The stop id 444 is a valid number if you want to test this out.</p>
      </div>
    )
  }
}