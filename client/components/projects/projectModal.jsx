import React, { Component } from 'react'

class ProjectModal extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.data
    this.submit = this.submit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.data)
  }

  catchClick(e) {
    e.stopPropagation()
  }

  update(prop) {
    return (e) => {
      this.setState({ [prop]: e.target.value })
    }
  }

  submit(e) {
    e.preventDefault()
    if (this.props.buttonText === "Update") {
      this.props.updateProject(this.state)
        .then(this.props.hide)
    } else {
      this.props.createProject(this.state)
        .then(this.props.hide)
    }
  }
  
  render() {
    if (!this.props.show) return null
    let errorMessages = null

    const { buttonText, title, errors } = this.props

    if (errors.length > 0) {
      errorMessages = <>
        <ul className="form-errors">
          {errors.map(error => <li key={error}>{ error }</li>)}
        </ul>
      </>
    }

    return (
      <div className="modal" onClick={this.props.hide}>
        <div className="modal-project" onClick={this.catchClick}>
          <header className="modal-project-header">
            { title }
          </header>

          <form onSubmit={this.submit}>
            <div className="modal-project-body">
              { errorMessages }

              <label for="title" className="form-label">Title</label>
              <input
                autoFocus
                className="form-input"
                id="title" 
                onChange={ this.update('title') }
                placeholder="title" 
                value={ this.state.title }
                type="text">
              </input>
            </div>

            <footer className="modal-project-footer">
              <a onClick={this.props.hide}>Cancel</a>
              <input type="submit" className="button button-large button-green" value={buttonText} />
            </footer>
          </form>
        </div>
      </div>
    )
  }
}

export default ProjectModal