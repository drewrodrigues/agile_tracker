import React, { Component } from 'react'

class StoryForm extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      title: "", 
      kind: "Feature", 
      points: "Unestimated", 
      description: "",
      workflow: this.props.workflow
    }
    this.submit = this.submit.bind(this)
  }

  close(e) {
    e.preventDefault()
    // TODO: close modal/form
  }

  update(prop) {
    return e => {
      this.setState({ [prop]: e.target.value })
    }
  }

  submit(e) {
    e.preventDefault()
    this.props.action(this.props.projectId, this.state)
    this.setState({ 
      title: "", 
      kind: "Feature", 
      points: "Unestimated", 
      description: "",
      workflow: this.props.workflow
    })
  }

  render() {
    return (
      <div className="story-form">
        <form onSubmit={ this.submit }>
          <input 
            type="text" 
            value={ this.state.title }
            onChange={ this.update('title') }
          />

          <button className="save">Save</button>
          <button onClick={ this.close }>Cancel</button>

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
              POINTS
              <select 
                className="story-form-right"
                onChange={ this.update('points') }
                value={ this.state.points }>
                <option>Unestimated</option>
                <option>0 points</option>
                <option>1 point</option>
                <option>2 points</option>
                <option>3 points</option>
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