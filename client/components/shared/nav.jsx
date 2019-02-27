import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <nav>
          { this.props.loggedIn ? (
            <div>
              <Link to="/">PivotTrack</Link>
              <button onClick={this.props.deleteSession}>Sign Out</button>
            </div>
          ) : (
            <div>
              <Link to="/">PivotTrack</Link>
              <Link to="/sign-up">Sign Up</Link>
              <Link to="/sign-in">Sign In</Link>
            </div>
          )}
        </nav>
      </>
    )
  }
}

export default Nav