import React, { Component } from 'react'
import AppNavbarContainer from '../shared/appNavbarContainer'

class ProjectShow extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getProject(this.props.match.params.id)
  }

  render() {
    if (!this.props.project) return null

    return (
      <div className="project-show">
        <AppNavbarContainer style="project-show" title={ this.props.project.title }/>
        <p>{ this.props.project.title }</p>
      </div>
    )
  }
}

export default ProjectShow