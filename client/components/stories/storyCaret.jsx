import React from 'react'

const StoryCaret = ({ showForm, toggleForm }) => {
  let faClassName = showForm ? "fa-caret-down" : "fa-caret-right"

  return (
    <i 
      className={`fa ${faClassName} icon-dropdown`}
      onClick={ toggleForm }>
    </i>
  )
}

export default StoryCaret