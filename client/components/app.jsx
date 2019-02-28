import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Landing from './pages/landing'
import SignUpContainer from './users/signUpContainer'
import SignInContainer from './sessions/signInContainer'
import ProjectIndexPlaceholder from './pages/projectIndexPlaceholder'

import { AuthRoute, ProtectedRoute } from "../helpers/routeHelper"

const App = () => (
  <div>
    <Switch>
        <ProtectedRoute path="/dashboard" component={ProjectIndexPlaceholder} />
        <AuthRoute path="/sign-up/:email" component={SignUpContainer} />
        <AuthRoute path="/sign-up" component={SignUpContainer} />
        <AuthRoute path="/sign-in/:demo" component={SignInContainer} />
        <AuthRoute path="/sign-in" component={SignInContainer} />
        <Route path="/" component={Landing} />
      )}
    </Switch>
  </div>
)

export default App