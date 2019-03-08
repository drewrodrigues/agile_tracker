import React, { Component } from 'react'
import StoryFormKind from './storyFormKind'
import StoryFormPoint from './storyFormPoint'

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
    
    let args = this.props.workflowId ? [this.props.workflowId, this.state] : [this.state]

    this.props.action(...args).then(() => {
      this.setState(this.props.story)
      this.props.toggleForm()
    })
  }

  render() {    
    let deleteButton
    let status

    if (this.props.canDelete) {
      deleteButton = <>
        <button className="story-form-button story-form-button-delete" onClick={ this.delete }>
          <i className="fa fa-trash"></i>
        </button>
      </>
    }

    if (this.props.story.points > 0) {
      status = <>
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
      </>
    }

    return (
      <div className={`story-form story-form-show-${this.props.show}`}>
        <form onSubmit={ this.submit }>
          <input 
            type="text" 
            value={ this.state.title }
            onChange={ this.update('title') }
            autoFocus
            id="title"
          />

          <button className="story-form-button-save story-form-button">Save</button>
          <button className="story-form-button story-form-button-cancel" onClick={ this.toggleForm }>Cancel</button>
          { deleteButton }

          <ul>
            <li>
              STORY TYPE

              { ["Feature", "Bug", "Chore", "Release"].map(kind => (
                <StoryFormKind 
                  key={ kind }
                  kind={ kind }
                  selected={ this.state.kind }
                  update={ this.update }/>
              ))}

            </li>

            { status }

            <li>
              POINTS
              <div className="story-form-points story-form-right">
                { [0, 1, 2, 3].map(points => (
                  <StoryFormPoint 
                    key={ points }
                    points={ points }
                    selected={ this.state.points }
                    update={ this.update }/>
                ))}
              </div>
            </li>
          </ul>


          <label>DESCRIPTION</label>
          <textarea 
            onChange={ this.update('description') }
            value={ this.state.description }/>
        </form>
      </div>
    )
  }
}

export default StoryForm