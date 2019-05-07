import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Hyph } from '../Utils/Utils'
import TokenService from '../../services/token-service'
import Menu from '../Menu/Menu'
import './Header.css'
import BusContext from '../../contexts/BusContext';

export default class Header extends Component {
  static contextType = BusContext

  state={
    hideLogout: true
  }
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.setState({ hideLogout: !this.state.hideLogout })
  }

  renderLogoutLink() {
    
    return (
      <div className='Header__logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    
    return (
      <div className='Header__not-logged-in'>
        <Link
          to='/register'>
          Register
        </Link>
        <Hyph />
        <Link
          to='/login'>
          Log in
        </Link>
      </div>
    )
  }

  renderMenu() {
    return (
      <Link 
        to='/late'>
        Late bus
      </Link>
    )
  }

  render() {
    return (
      <nav className='header'>
        <h1>
          <Link to='/'>
            {/* Header icon/image here in future */}
            {' '}
            Salem Bus
          </Link>
        </h1>
        {/* {TokenService.hasAuthToken() */}
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
        { '|' }
        {this.renderMenu()}
      </nav>
    )
  }
}
