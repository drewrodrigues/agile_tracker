import React, { Component } from 'react'
import StoryIcon from './storyIcon'
import StoryCaret from './storyCaret'
import StoryPoints from './storyPoints'
import StoryButton from './storyButton'
import StoryUpdateContainer from './storyUpdateContainer'
import StoryEstimate from './storyEstimate'

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
    let estimated = this.props.data.points > 0 ? true : false
    let estimateOrButton

    const { provided, innerRef } = this.props

    switch (estimated) {
      case true:
        estimateOrButton = <>
          <StoryButton
            status={ this.props.data.status }
            story={ this.props.data }
            nextStatusForStory={ this.props.nextStatusForStory }
            rejectStory={ this.props.rejectStory }
            acceptStory={ this.props.acceptStory }
          />
        </>
        break
      case false:
        if (this.props.data.status !== "Accepted") {
          estimateOrButton = <StoryEstimate story={ this.props.data } update={ this.props.updateStory }/>
        }
        break
    }
    
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
        <div 
          className={`story story-${this.props.data.status} story-${this.props.data.workflow}`}
          { ...provided.draggableProps }
          { ...provided.dragHandleProps }
          ref={innerRef}
        >
          <div className="icons">
            <StoryCaret
              showForm={ this.props.showForm }
              toggleForm={ this.toggleForm }
            />

            <StoryIcon kind={ this.props.data.kind }/>

            {this.props.data.status !== "Accepted" ? (
              <StoryPoints points={ this.props.data.points }/>
            ) : null}
          </div>

          <div className="story-content">
            { estimateOrButton }
            { this.props.data.title }
          </div>
        </div>
      )
    }
  }
}

export default Story