import React, { Component } from 'react'

class StoryEstimate extends Component {
  update(points) {
    return e => {
      e.preventDefault()
      let newState = Object.assign(this.props.story, { points })
      this.props.update(newState)
    }
  }

  render() {
    return (
      <div className="estimate-points">
        <button 
          className="blocks" 
          onClick={ this.update(1) }>
          <span className="block-invis"></span>
          <span className="block-invis"></span>
          <span className="block"></span>
        </button>
        <button 
          className="blocks" 
          onClick={ this.update(2) }>
          <span className="block-invis"></span>
          <span className="block"></span>
          <span className="block"></span>
        </button>
        <button 
          className="blocks" 
          onClick={ this.update(3) }>
          <span className="block"></span>
          <span className="block"></span>
          <span className="block"></span>
        </button>
      </div>
    )
  }
}

export default StoryEstimate