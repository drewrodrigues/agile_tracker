import React from 'react'
import MainNavbar from '../shared/mainNavbar'
import { Link } from 'react-router-dom'

class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = { email: "" }
    this.sendToSignUp = this.sendToSignUp.bind(this)
  }

  update(prop) {
    return e => {
      this.setState({ [prop]: e.target.value })
    }
  }

  sendToSignUp(e) {
    e.preventDefault()
    this.props.history.push(`/sign-up/${this.state.email}`)
  }
  
  render() {
    return (
      <div className="landing">
        <MainNavbar />

        <section className="landing-jumbo">
          <div className="container">
            <div className="grid-row">
              <div className="grid-1-2">
                <h1 className="landing-jumbo-slogan">
                Agile Tracker is changing <br/>how teams build software<br/>
                one story at a time
                </h1>
              </div>{/* .grid-1-2 */}

              <div className="grid-1-2">
                <form className="landing-signup-form">
                  <h3 className="landing-signup-form-title">Get started today!</h3>

                  <label for="email">Sign up with your email</label>
                  <input
                    type="email"
                    className="form-input"
                    id="email"
                    placeholder="email@domain.com"
                    value={this.state.email}
                    onChange={this.update('email')} />

                  <div className="button-group">
                    <button
                      type="submit"
                      className="button button-large button-blue"
                      onClick={this.sendToSignUp}>Get started</button>
                    <Link className="button button-large button-green" to="/sign-in/demo">Try the demo</Link>
                  </div>
                </form>
              </div>{/* .grid-1-2 */}
            </div>{/* .grid-row */}
          </div>{/* .container */}
        </section>{/* .landing-jumbo */}

        <section className="container">
          <div className="landing-feature landing-feature-large">
            <h3 className="landing-feature-large-title">Proven project management for successful teams</h3>
            <p className="landing-feature-large-body">With a shared view of team priorities, a process that fosters collaboration, and dynamic tools to analyze progress, your team will deliver more frequently and consistently.</p>
          </div>{/* .landing-feature */}

          <div className="landing-feature landing-feature-small landing-feature-small-right">
            <img src={ window.images.feature1 } />
            <h3 className="landing-feature-small-title">Better organization to get focused</h3>
            <p className="landing-feature-small-body"><span>Keep your team on the rails.</span> Tracker's shared backlog makes priorities clear so the team can stay organized. Easily visualize scope, focus your teamwork, and stay nimble when circumstances change.</p>
          </div>{/* .landing-feature */}

          <div className="landing-feature landing-feature-small landing-feature-small-left">
            <img src={ window.images.feature2 } />
            <h3 className="landing-feature-small-title">Better organization to get focused</h3>
            <p className="landing-feature-small-body"><span>Keep your team on the rails.</span> Tracker's shared backlog makes priorities clear so the team can stay organized. Easily visualize scope, focus your teamwork, and stay nimble when circumstances change.</p>
          </div>{/* .landing-feature */}

          <div className="landing-feature landing-feature-small landing-feature-small-right">
            <img src={ window.images.feature3 } />
            <h3 className="landing-feature-small-title">Better organization to get focused</h3>
            <p className="landing-feature-small-body"><span>Keep your team on the rails.</span> Tracker's shared backlog makes priorities clear so the team can stay organized. Easily visualize scope, focus your teamwork, and stay nimble when circumstances change.</p>
          </div>{/* .landing-feature */}

          <div className="landing-feature landing-feature-large">
            <h3 className="landing-feature-large-title">A better way to develop</h3>
            <p className="landing-feature-large-body">Succeeding in an evolving tech landscape requires a time-tested process and a tool your team can rely on. Tracker's modern workflow helps your team keep the pace and adapt when needs change.</p>
            <Link to="/sign-in/demo" className="button button-orange get-started">Get started!</Link>
          </div>{/* .landing-feature */}

          <footer>
            <img src={ window.images.devices } />
          </footer>
        </section>
      </div>
    )
  }
}

export default Landing