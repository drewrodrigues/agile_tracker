import React, { Component } from 'react'

class ProjectIndex extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getProjects()
  }

  render() {
    return (
      <>
        <h2>Project Index</h2>
      </>
    )
  }
}

export default ProjectIndex