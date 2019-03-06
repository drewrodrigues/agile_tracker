import React from 'react'

const StoryFormPoint = ({ points, selected, update }) => {
  let content
  let blocks
  let selectedStyle = points == selected ? "selected" : ""
  let noBlocks

  switch (points) {
    case 0:
      content = "Unestimated"
      noBlocks = "no-blocks"
      break
    case 1:
      content = 1
      blocks = <>
          <div className="blocks">
            <span className="block-invis"></span>
            <span className="block-invis"></span>
            <span className="block"></span>
        </div>
      </>
      break
    case 2:
      content = 2
      blocks = <>
          <div className="blocks">
            <span className="block-invis"></span>
            <span className="block"></span>
            <span className="block"></span>
        </div>
      </>
      break
    case 3:
      content = 3
      blocks = <>
          <div className="blocks">
            <span className="block"></span>
            <span className="block"></span>
            <span className="block"></span>
        </div>
      </>
      break
  }

  return (
    <button
      className={`point-select ${selectedStyle} ${noBlocks}`}
      onClick={ update('points') }
      value={ points }>
      { blocks }
      { content }
    </button>
  )
}

export default StoryFormPoint