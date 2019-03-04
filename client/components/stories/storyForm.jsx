import React, { Component } from 'react'

class StoryForm extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.story
    this.toggleForm = this.toggleForm.bind(this)
    this.delete = this.delete.bind(this)
    this.submit = this.submit.bind(this)
  }

  toggleForm(e) {
    e.preventDefault()
    this.props.toggleForm()
  }

  delete(e) {
    e.preventDefault()
    this.props.delete(this.props.story.id)
  }

  update(prop) {
    return e => {
      this.setState({ [prop]: e.target.value })
    }
  }

  submit(e) {
    e.preventDefault()

    let args = this.props.projectId ? [this.props.projectId, this.state] : [this.state]

    this.props.action(...args).then(() => {
      this.setState(this.props.story)
      this.props.toggleForm()
    })
  }

  render() {
    if (!this.props.show) return null

    let deleteButton =  this.props.canDelete ? (
      <button className="delete" onClick={ this.delete } >
        <i className="fa fa-trash"></i>
      </button>
    ) : null

    return (
      <div className="story-form">
        <form onSubmit={ this.submit }>
          <input 
            type="text" 
            value={ this.state.title }
            onChange={ this.update('title') }
          />

          { deleteButton }
          <button className="save">Save</button>
          <button onClick={ this.toggleForm }>Cancel</button>

          <ul>
            <li>
              STORY TYPE
              <select 
                className="story-form-right"
                onChange={ this.update('kind') }
                value={ this.state.kind }>
                <option>Feature</option>
                <option>Bug</option>
                <option>Chore</option>
                <option>Release</option>
              </select>
            </li>

            <li>
              STATUS
              <select 
                className="story-form-right"
                onChange={ this.update('status') }
                value={ this.state.status }>
                <option>Unstarted</option>
                <option>Started</option>
                <option>Finished</option>
                <option>Delivered</option>
                <option>Accepted</option>
                <option>Rejected</option>
              </select>
            </li>

            <li>
              POINTS
              <select 
                className="story-form-right"
                onChange={ this.update('points') }
                value={ this.state.points }>
                <option>Unestimated</option>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </li>
          </ul>


          <label>DESCRIPTION</label>
          <textarea 
            onChange={ this.update('description') }
            value={ this.state.description }
          />
        </form>
      </div>
    )
  }
}

export default StoryForm