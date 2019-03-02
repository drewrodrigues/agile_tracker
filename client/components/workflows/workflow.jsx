import React, { Component } from 'react'

class Workflow extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.show) return null

    let button = null
    if (this.props.canAddStory) {
      button = <button className="add-story-button">
        <i className="fa fa-plus"></i>Add Story
      </button>
    }

    return (
      <section className="workflow">
        <header className="workflow-header">
          <button className="workflow-hide-button" onClick={ this.props.toggleWorkflow }>
            <i className="fa fa-times"></i>
          </button>

          { this.props.workflow }

          { button }
        </header>
      </section>
    )
  }
}

export default Workflow