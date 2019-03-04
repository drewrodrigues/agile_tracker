import React, { Component } from 'react'
import StoryFormKind from './storyFormKind'
import StoryFormPoint from './storyFormPoint'

class StoryForm extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.story
    this.toggleForm = this.toggleForm.bind(this)
    this.changeWorkflowBasedOnStatus = this.changeWorkflowBasedOnStatus.bind(this)
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

  changeWorkflowBasedOnStatus(callback) {
    if (["Unstarted", "Done", "Rejected", "Started", "Delivered"].includes(this.state.status)
        && this.state.workflow === "Done") {
      this.setState({ workflow: "Current" }, callback)
    } else if (["Icebox", "Backlog"].includes(this.state.workflow) && ![undefined, "Unstarted"].includes(this.state.status)) {
      this.setState({ workflow: "Current" }, callback)
    } else if ("Accepted" === this.state.status) {
      this.setState({ workflow: "Done" }, callback)
    } else {
      callback()
    }
  }

  update(prop) {
    return e => {
      e.preventDefault()
      this.setState({ [prop]: e.currentTarget.value })
    }
  }

  submit(e) {
    e.preventDefault()
    
    this.changeWorkflowBasedOnStatus(() => {
      let args = this.props.projectId ? [this.props.projectId, this.state] : [this.state]

      this.props.action(...args).then(() => {
        this.setState(this.props.story)
        this.props.toggleForm()
      })
    })
  }

  render() {
    if (!this.props.show) return null
    
    let deleteButton
    let status

    if (this.props.canDelete) {
      deleteButton = <>
        <button className="story-form-button story-form-button-delete" onClick={ this.delete } >
          <i className="fa fa-trash"></i>
        </button>
      </>

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

              { ["Feature", "Bug", "Chore", "Release"].map(kind => (
                <StoryFormKind 
                  key={ kind }
                  kind={ kind }
                  selected={ this.state.kind }
                  update={ this.update }
                />
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
                    update={ this.update }
                  />
                ))}
              </div>
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