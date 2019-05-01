import React, { Component } from 'react';
import './Menu.css';

import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import { Button, Input } from '../Utils/Utils';

export default class Menu extends Component {
  static defaultProps = {
    onLongSuccess: () => {}
  }

  state = { error: null }

  handleSubmitJwtAuth = event => {
    event.preventDefault()
    this.setState({ error:null })
    const { user_name, password } = event.target

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(response => {
        user_name.value = ''
        password.value = ''
        TokenService.saveAuthToken(response.authToken)
        this.props.onLongSuccess()
      })
      .catch(response => {
        this.setState({ error: response.error })
      })
  }

  render() {
    const { error } = this.state
   


    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='LoginForm__user_name'>
            User name
          </label>
          <Input
            required
            name='user_name'
            id='LoginForm__user_name'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <Input
            required
            name='password'
            type='password'
            id='LoginForm__password'>
          </Input>
        </div>
        <Button type='submit'>
          Login
        </Button>
      </form>
    )
  }
}