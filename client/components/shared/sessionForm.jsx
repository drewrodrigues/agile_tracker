import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SignInNavbar from '../sessions/signInNavbar'

class SessionForm extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      disabled: true,
      email: this.props.email,
      password: this.props.password
    }
    this.submit = this.submit.bind(this)

    if (this.props.formType === 'signin' && this.props.match.params.demo) {
      this.demoSignIn()
    }
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  demoSignIn() {
    const fillInField = (fieldName, value) => new Promise(res => {
      const splitValue = value.split("")
      
      const fillInInterval = setInterval(() => {
        if (splitValue.length === 0) {
          clearInterval(fillInInterval)
          res()
        } else {
          this.setState({ [fieldName]: this.state[fieldName] + splitValue.shift() }, this.validateForm)
        }
      }, 50)
    })

    const fillInEmail = fillInField('email', 'example@example.com')
    const fillInPassword = () => fillInField('password', 'password')

    fillInEmail
      .then(fillInPassword)
      .then(this.submit)
  }

  validateForm() {
    const { email, password } = this.state
    if (email.length > 0 && password.length >= 8) {
      this.setState({ disabled: false })
    } else {
      this.setState({ disabled: true })
    }
  }

  update(prop) {
    return (e) => {
      this.setState({ [prop]: e.target.value }, this.validateForm)
    }
  }

  submit(e) {
    if (e) e.preventDefault()
    if (this.state.disabled) return false
    const { email, password } = this.state

    this.props.action({ email, password }).then(() => {
      this.props.history.push('/')
    })
  }

  render() {
    let buttonText = (this.props.formType === 'signup' ? 'Sign Up' : 'Sign In')
    let errorMessages = null
    let footer = null
    let formHeader = null
    let header = null
    let navBar = null

    const { formType, errors } = this.props
    const { email, password } = this.state

    if (formType === 'signup') {
      header = <>
        <header className="signup-header">
          <Link to="/" className="logo">
            <img src={ window.images.logo } />
            Agile<span>Tracker</span>
          </Link>
          <h4 className="signup-header-slogan">Get started&mdash;it's free!</h4>
        </header>
      </>

      footer = <>
        <footer className="signup-footer">
          <p>
            Already have an account?
            <Link to="/sign-in">Sign In</Link>
          </p>
        </footer>
      </>
    }

    if (formType === 'signin') {
      navBar = <SignInNavbar />
      formHeader = <>
        <div className="form-header">
          <h3 className="form-title">Sign In</h3>
          <h4 className="form-subtitle">Sign in to continue to Agile Tracker.</h4>
        </div>
      </>
    }

    if (errors.length > 0) {
      errorMessages = <>
        <ul className="form-errors">
          {errors.map(error => <li key={error}>{ error }</li>)}
        </ul>
      </>
    }

    return (
      <div className={`${this.props.formType}`}>
        { navBar }

        <div className="container">
          { header }

          <form onSubmit={this.submit} className={`form form-${this.props.formType}`}>
            { formHeader }

            { errorMessages }

            <label for="email" className="form-label">Email</label>
            <input 
              className="form-input"
              id="email"
              onChange={this.update('email')}
              selected
              type="text"
              value={email}
            />

            <label for="password" className="form-label">Password</label>
            <input 
              className="form-input"
              id="password"
              onChange={this.update('password')}
              type="password"
              value={password}
            />

            <footer className="form-footer">
              <input 
                className={`
                  form-submit
                  disabled-${this.state.disabled}
                `}
                type="submit" 
                value={buttonText} 
              />
            </footer>
          </form>

          { footer }
        </div>
      </div>
    )
  }
}

export default SessionForm