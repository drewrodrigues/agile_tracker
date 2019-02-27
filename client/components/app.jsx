import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from './pages/landing'

const App = () => (
  <div>
    <h1>PivotTrack</h1>
    <Switch>
      <Route exact path="/" component={Landing} />
    </Switch>
  </div>
)

export default App