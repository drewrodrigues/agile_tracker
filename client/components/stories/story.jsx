import React, { Component } from 'react'
import StoryIcon from './storyIcon'
import StoryButton from './storyButton'

class Story extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={`story story-${this.props.data.status} story-${this.props.data.workflow}`}>
        <p>
          <i className="fa fa-caret-right icon-dropdown"></i>
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

export default Story