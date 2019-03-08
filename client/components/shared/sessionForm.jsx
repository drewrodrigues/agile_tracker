import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SignInNavbar from '../sessions/signInNavbar'

class SessionForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: this.props.email,
      password: this.props.password,
      failedAuth: false
    }
    this.demoSignIn = this.demoSignIn.bind(this)
    this.submit = this.submit.bind(this)

    if (this.props.formType === 'signin' && this.props.match.params.demo) {
      this.demoSignIn()
    }
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  demoSignIn(e) {
    if (this.props.formType === "signup") {
      this.props.history.push("/sign-in/demo")
    }
    if (e) e.preventDefault()
    this.props.clearErrors()
    this.setState({ 
      email: "",
      password: ""
    })

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

  update(prop) {
    return (e) => {
      if (this.state.failedAuth) {
        this.props.clearErrors()
        this.setState({ failedAuth: false })
      }
      this.setState({ [prop]: e.target.value })
    }
  }

  submit(e) {
    if (e) e.preventDefault()
    const { email, password } = this.state

    this.props.action({ email, password }).then(() => {
      this.props.history.push('/')
    }).fail(this.setState({ failedAuth: true }))
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
      header = <Link to="/" className="logo">
        <img src={ window.images.logo } />
        Agile<span>Tracker</span>
      </Link>
      formHeader = <>
        <div className="form-header session-header">
          <h4 className="form-title">Get started</h4>
          <h4 className="form-subtitle">It's free and always will be</h4>
        </div>
      </>

footer = <>
<footer className="session-footer">
  <p>
    Already have an account?
    <Link to="/sign-in">Sign In</Link>
  </p>
</footer>
</>
    }

    if (formType === 'signin') {
      header = <Link to="/" className="logo">
        <img src={ window.images.logo } />
        Agile<span>Tracker</span>
      </Link>
      formHeader = <>
        <div className="form-header">
          <h3 className="form-title">Sign In</h3>
          <h4 className="form-subtitle">Sign in to continue to Agile Tracker.</h4>
        </div>
      </>

      footer = <>
      <footer className="session-footer">
        <p>
          Don't have an account?
          <Link to="/sign-up">Sign Up</Link>
        </p>
      </footer>
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
      <div className="session">
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
              type="text"
              value={email}
              autoFocus
            />

            <label for="password" className="form-label">Password<span>Minimum 8 characters</span></label>
            <input 
              className="form-input"
              id="password"
              onChange={this.update('password')}
              type="password"
              value={password}
            />

            <footer className="form-footer">
              <div className="button-group">
                    <button
                      type="submit"
                      className="button button-large button-blue">{ buttonText }</button>
                    <button className="button button-large button-green" onClick={ this.demoSignIn }>Try the demo</button>
                  </div>
            </footer>
          </form>

          { footer }
        </div>
      </div>
    )
  }
}

export default SessionForm