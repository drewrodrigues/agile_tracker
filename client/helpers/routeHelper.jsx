import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.id)
  }
}

const Auth = ({ component: Component, exact, path, loggedIn }) => (
  <Route path={path} exact={exact} render={props => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/dashboard" />
    )
  )}/>
)

const Protected = ({ component: Component, exact, path, loggedIn }) => (
  <Route path={path} exact={exact} render={props => (
    loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/sign-in" />
    )
  )}/>
)

export const AuthRoute = connect(mapStateToProps)(Auth)
export const ProtectedRoute = connect(mapStateToProps)(Protected)