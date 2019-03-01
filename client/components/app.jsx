import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Landing from './pages/landing'
import SignUpContainer from './users/signUpContainer'
import SignInContainer from './sessions/signInContainer'
import ProjectIndexContainer from './projects/projectIndexContainer'
import ProjectShowContainer from './projects/projectShowContainer'

import { AuthRoute, ProtectedRoute } from "../helpers/routeHelper"

const App = () => (
  <div>
    <Switch>
        <AuthRoute path="/sign-up/:email" component={SignUpContainer} />
        <AuthRoute path="/sign-up" component={SignUpContainer} />
        <AuthRoute path="/sign-in/:demo" component={SignInContainer} />
        <AuthRoute path="/sign-in" component={SignInContainer} />
        <ProtectedRoute path="/projects/:id" component={ProjectShowContainer} />
        <ProtectedRoute path="/dashboard" component={ProjectIndexContainer} />
        <AuthRoute path="/" component={Landing} />
      )}
    </Switch>
  </div>
)

export default App