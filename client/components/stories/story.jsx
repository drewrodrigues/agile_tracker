import React, { Component } from 'react'

import StoryIcon from './storyIcon'
import StoryCaret from './storyCaret'
import StoryPoints from './storyPoints'
import StoryUpdateContainer from './storyUpdateContainer'
import EstimateOrButton from './estimateOrButton'

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
    const { 
      acceptStory,
      innerRef,
      nextStatusForStory, 
      provided,
      rejectStory,
      showForm,
      story,
      workflow,
      updateStory
    } = this.props

    if (this.state.showForm) {
      return (
        <StoryUpdateContainer
          canDelete={ true }
          show={ this.state.showForm }
          story={ story }
          toggleForm={ this.toggleForm }/>
      )
    } else {
      return (
        <div 
          className={ `story story-${story.status} story-${workflow.title} story-updated-${story.updated}` }
          { ...provided.draggableProps }
          { ...provided.dragHandleProps }
          ref={innerRef}>

          <div className="icons">
            <StoryCaret 
              showForm={ showForm } 
              toggleForm={ this.toggleForm }/>
            <StoryIcon 
              kind={ story.kind }/>
            <StoryPoints 
              points={ story.points } 
              status={ story.status }/>
          </div>

          <div className="story-content">
            <EstimateOrButton
              acceptStory={ acceptStory }
              story={ story }
              nextStatusForStory={ nextStatusForStory }
              rejectStory={ rejectStory }
              updateStory={ updateStory }/>

            { story.title }
          </div>
        </div>
      )
    }
  }
}

export default Story