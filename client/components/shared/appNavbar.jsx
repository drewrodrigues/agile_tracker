import React, { Component } from 'react'

class AppNavbar extends Component {
  render() {
    return (
      <nav className="navbar-app">
        <nav className="navbar-app-left">
          <p>AgileTracker</p>
        </nav>

        <nav className="navbar-app-right">
          <p>{ this.props.currentUser.email }</p>
          <a onClick={ this.props.deleteSession }>Sign Out</a>
        </nav>
      </nav>
    )
  }
}

export default AppNavbar