import React, { Component } from 'react'

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = { email: "", password: "" }

    this.submit = this.submit.bind(this)
  }

  update(prop) {
    return (e) => {
      this.setState({ [prop]: e.target.value })
    }
  }

  submit(e) {
    e.preventDefault()

    this.props.createSession(this.state).then(() => {
      this.props.history.push('/')
    })
  }

  render() {
    return (
      <>
        <h2>Sign In Form</h2>
        {this.props.errors.map(error => <li key={error}>{ error }</li>)}
        <form onSubmit={this.submit}>
          <label>Email
            <input 
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
            />
          </label>

          <label>Password
            <input 
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>

          <input type="submit" value="Sign Up"/>
        </form>
      </>
    )
  }
}

export default SignUp