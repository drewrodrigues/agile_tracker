import React from 'react'
import { Link } from 'react-router-dom'

const SignInNavbar = () => (
  <nav className="navbar nav-sign-in">
    <div className="container clear">
      <Link to="/" className="logo">
        <img src={ window.images.logo } />
        Agile<span>Tracker</span>
      </Link>
      <nav className="navbar-right">
        <p className="navbar-right-text">DON'T HAVE AN ACCOUNT?</p>
        <Link to="/sign-up" className="navbar-right-link">SIGN UP</Link>
      </nav>
    </div>
  </nav>
)

export default SignInNavbar