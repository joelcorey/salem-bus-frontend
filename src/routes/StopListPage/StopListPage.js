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
      console.log('BusStopApiService.getStops()')
      // .then(this.context.setArticleList)
      // .catch(this.context.setError)
  }

  renderStops() {
    const { stopsList = [] } = this.context
    return stopsList.map(stops =>
      <StopListItem
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
