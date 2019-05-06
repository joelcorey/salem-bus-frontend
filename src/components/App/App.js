import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Loading from '../Loading/Loading'
import Message from '../Message/Message'
import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar'
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import StopListPage from '../../routes/StopListPage/StopListPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import LateBusPage from '../../routes/LateBusPage/LateBusPage'

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
        <Header />
        <main className="App">
          <Message 
            message={this.state.message}
            isActive={false}
          />
          <SearchBar />
          <Switch>
            <Route
              exact
              path={'/'}
              component={StopListPage}
            />
            <PublicOnlyRoute
              path={'/login'}
              component={LoginPage}
            />
            <PublicOnlyRoute
              path={'/register'}
              component={RegistrationPage}
            />
            <PrivateRoute 
              path={'/late'}
              component={LateBusPage}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>

        </main>
      </>

    );
  }
  
}