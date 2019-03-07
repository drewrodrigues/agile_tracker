import React from 'react'

const Placeholder = ({ show, workflow, toggleForm }) => {
  if (!show) return null

  let text = {
    "Icebox":  "Loose ideas for later go here",
    "Backlog": "These are next up",
    "Current": "Worked on stories go here",
    "Done":    "Stories go here once accepted"
  }
  let icon = {
    "Icebox":  "fa fa-snowflake-o",
    "Backlog": "fa fa-cog",
    "Current": "fa fa-list-ul",
    "Done":    "fa fa-check"
  }
  let button = null
  if (workflow !== "Done") {
    button = <>
      <button onClick={ toggleForm }className="button button-large button-green">Add a story
      </button>
    </>
  }
  
  return (
    <div className="placeholder">
      <h4><i className={ icon[workflow] }></i> { text[workflow] }</h4>
      { button }
    </div>
  )
}

export default Placeholder