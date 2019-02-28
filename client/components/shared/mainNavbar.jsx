import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MainNavbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <>
        { this.props.loggedIn ? (
          <nav className="navbar nav-signed-in">
            <div className="container">
              <Link to="/" className="logo">
                <img src={ window.images.logo } />
                Agile<span>Tracker</span>
              </Link>
              <button 
                onClick={this.props.deleteSession}
                className="button button-orange">Sign Out</button>
            </div>
          </nav>
        ) : (
          <nav className="navbar nav-signed-out">
            <div className="container clear">
              <Link to="/" className="logo">
                <img src={ window.images.logo } />
                Agile<span>Tracker</span>
              </Link>
              <nav className="navbar-right">
                <Link to="/sign-in" className="button button-orange">Log in</Link>
                <Link to="/sign-up" className="button button-blue">Sign up</Link>
              </nav>
            </div>
          </nav>
        )}
      </>
    )
  }
}

export default MainNavbar