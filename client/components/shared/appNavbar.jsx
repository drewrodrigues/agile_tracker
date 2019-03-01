import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AppNavbar extends Component {
  render() {
    return (
      <nav className={`navbar-app ${this.props.style}`}>
        <nav className="navbar-app-left">
          <Link to="/dashboard">{ this.props.title }</Link>
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