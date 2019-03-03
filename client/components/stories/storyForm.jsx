import React, { Component } from 'react'

class StoryForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="story-form">
        <input type="text"></input>

        <button className="save">Save</button>
        <button>Cancel</button>

        <ul>
          <li>
            STORY TYPE
            <select className="story-form-right">
              <option>Feature</option>
              <option>Bug</option>
              <option>Chore</option>
              <option>Release</option>
            </select>
          </li>

          <li>
            POINTS
            <select className="story-form-right">
              <option>Unestimated</option>
              <option>0 points</option>
              <option>1 point</option>
              <option>2 points</option>
              <option>3 points</option>
            </select>
          </li>
        </ul>


        <label>DESCRIPTION</label>
        <textarea>

        </textarea>
      </div>
    )
  }
}

export default StoryForm