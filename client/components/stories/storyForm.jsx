import React, { Component } from 'react'
import StoryFormKind from './storyFormKind'

class StoryForm extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.story
    this.toggleForm = this.toggleForm.bind(this)
    this.delete = this.delete.bind(this)
    this.update = this.update.bind(this)
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
      e.preventDefault()
      this.setState({ [prop]: e.currentTarget.value })
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
      <button className="story-form-button story-form-button-delete" onClick={ this.delete } >
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
          <button className="story-form-button-save story-form-button">Save</button>
          <button className="story-form-button" onClick={ this.toggleForm }>Cancel</button>

          <ul>
            <li>
              STORY TYPE

              <StoryFormKind 
                kind="Feature"
                selected={ this.state.kind }
                update={ this.update }/>
              <StoryFormKind 
                kind="Bug"
                selected={ this.state.kind }
                update={ this.update }/>
              <StoryFormKind 
                kind="Chore"
                selected={ this.state.kind }
                update={ this.update }/>
              <StoryFormKind 
                kind="Release"
                selected={ this.state.kind }
                update={ this.update }/>
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