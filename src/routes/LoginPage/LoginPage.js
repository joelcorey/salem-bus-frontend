import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Section } from '../../components/Utils/Utils'
import BusContext, { BusProvider } from '../../contexts/BusContext'

export default class LoginPage extends Component {
  static contextType = BusContext

  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    //this.context.setAuthToken({ authToken: res.authToken })
    // this.context.loggedIn === null ?
    //   this.context.setLoggedIn({ loggedIn: true }) :
    //   this.context.setLoggedIn({ loggedIn: false })

    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    //console.log(destination)
    history.push(destination)
  }

  render() {
    return (
      <Section className='LoginPage'>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </Section>
    )
  }
}
