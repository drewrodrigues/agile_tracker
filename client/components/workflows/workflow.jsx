import React, { Component } from 'react'
import { Droppable } from 'react-beautiful-dnd'

import StoryIndex from '../stories/storyIndex'
import StoryFormContainer from '../stories/storyFormContainer'
import Placeholder from './placeholder'


class Workflow extends Component {
  constructor(props) {
    super(props)
    this.state = { showForm: false }
    this.toggleForm = this.toggleForm.bind(this)
    this.canAddStory = this.props.workflow.title !== "Done"
  }

  toggleForm() {
    this.setState({ showForm: !this.state.showForm })
  }

  render() {
    if (!this.props.show) return null

    let addStoryButton = null
    if (this.canAddStory) {
      addStoryButton = <button className="add-story-button" onClick={ this.toggleForm }>
        <i className="fa fa-plus"></i>Add Story
      </button>
    }

    return (
      <section className="workflow">
        <header className="workflow-header">
          <button className="workflow-hide-button" onClick={ this.props.toggleWorkflow }>
            <i className="fa fa-times"></i>
          </button>

          { this.props.workflow.title }

          { addStoryButton }
        </header>

        <div className="story-container">
          <StoryFormContainer
            canDelete={ false }
            show={ this.state.showForm }
            toggleForm={ this.toggleForm }
            workflow={ this.props.workflow }/>

          <Droppable droppableId={ String(this.props.workflow.id) }>
            { provided => (
              <div 
                { ...provided.droppableProps }
                ref={ provided.innerRef }
                className="droppable-container">
                { this.props.stories.length === 0 ? (
                  <Placeholder show={ !this.state.showForm } workflow={ this.props.workflow.title } toggleForm={this.toggleForm } />
                ) : null }

                <StoryIndex stories={ this.props.stories } workflow={ this.props.workflow } />
                { provided.placeholder }
              </div>
            )}
          </Droppable>
        </div>
      </section>
    )
  }
}

export default Workflow