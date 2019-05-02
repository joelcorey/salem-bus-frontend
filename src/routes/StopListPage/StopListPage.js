import React, { Component } from 'react'
import BusContext from '../../contexts/BusContext'
import BusStopApiService from '../../services/bus-stop-api-service'
import { Section } from '../../components/Utils/Utils'
import StopListItem from '../../components/StopListItem/StopListItem'

export default class ArticleListPage extends Component {
  static contextType = BusContext

  componentDidMount() {
    this.context.clearError()
    BusStopApiService.getStops()
      
      .then(this.context.setStopList)
      .catch(this.context.setError)
  }

  renderStops() {
    const { stopList = [] } = this.context
    return stopList.map(stop =>
      <StopListItem
        key={stop.id}
        stop="bus stop prop passed"
      />
    )
  }

  render() {
    const { error } = this.context
    return (
      <Section list className='ArticleListPage'>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderStops()}
      </Section>
    )
  }
}
