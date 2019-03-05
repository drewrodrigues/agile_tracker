import React, { Component } from 'react'
import StoryContainer from '../stories/storyContainer'
import StoryFormContainer from '../stories/storyFormContainer'

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
            projectId={ this.props.projectId }
            show={ this.state.showForm }
            toggleForm={ this.toggleForm }
            workflow={ this.props.workflow }/>

          { this.props.stories.map(story => <StoryContainer key={story.id} story={story}/>)}
        </div>
      </section>
    )
  }
}

export default Workflow