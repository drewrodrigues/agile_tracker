import React, { Component } from 'react'
import StoryIcon from './storyIcon'
import StoryCaret from './storyCaret'
import StoryButton from './storyButton'
import StoryUpdateContainer from './storyUpdateContainer'

class Story extends Component {
  constructor(props) {
    super(props)

    this.state = { showForm: false }
    this.toggleForm = this.toggleForm.bind(this)
  }

  toggleForm() {
    this.setState({ showForm: !this.state.showForm })
  }

  render() {
    if (this.state.showForm) {
      return (
        <StoryUpdateContainer 
          canDelete={ true }
          show={ this.state.showForm }
          story={ this.props.data }
          toggleForm={ this.toggleForm }  
        />
      )
    } else {
      return (
        <div className={`story story-${this.props.data.status} story-${this.props.data.workflow}`}>
          <div className="icons">
            <StoryCaret
              showForm={ this.props.showForm }
              toggleForm={ this.toggleForm }
            />

            <StoryIcon kind={ this.props.data.kind }/>
          </div>

          <p>
            <StoryButton
              status={ this.props.data.status }
              story={ this.props.data }
              updateStory={ this.props.updateStory }
            />
            { this.props.data.title }
          </p>
        </div>
      )
    }
  }
}

export default Story