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
          story={ this.props.data }
          toggleForm={ this.toggleForm }  
        />
      )
    } else {
      return (
        <div className={`story story-${this.props.data.status} story-${this.props.data.workflow}`}>
          <p>
            <StoryCaret
              showForm={ this.props.showForm }
              toggleForm={ this.toggleForm }
            />

            <StoryIcon kind={ this.props.data.kind }/>
            { this.props.data.title }

            <StoryButton
              status={ this.props.data.status }
              story={ this.props.data }
              updateStory={ this.props.updateStory }
            />
          </p>
        </div>
      )
    }
  }
}

export default Story