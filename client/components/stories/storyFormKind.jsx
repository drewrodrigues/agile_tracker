import React from 'react'

const StoryFormKind = ({ kind, selected, update }) => {
  let icon
  let style = kind.toLowerCase()
  let selectedStyle = selected === kind ? `icon-${style}` : ""

  switch (kind) {
    case "Feature":
      icon = "fa-star"
      break
    case "Bug":
      icon = "fa-bug"
      break
    case "Chore":
      icon = "fa-gear"
      break
    case "Release":
      icon = "fa-flag"
      break
    default:
      break;
  }
  
  return (
    <button 
      className={`story-form-button story-form-kind button-kind ${selectedStyle}`}
      onClick={ update('kind') }
      value={ kind }>
      <i className={`fa ${icon}`}
         onClick={ update } />
      { kind }
    </button> 
  )
}

export default StoryFormKind