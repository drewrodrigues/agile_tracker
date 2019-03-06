import React from 'react'

const StoryPoints = ({ points, status }) => {
  if (status === "Accepted") return null
  
  let blocks
  switch (points) {
    case 0:
      break
    case 1:
      blocks = <>
        <div className="blocks">
          <span className="block-invis"></span>
          <span className="block-invis"></span>
          <span className="block"></span>
        </div>
      </>
      break
    case 2:
      blocks = <>
        <div className="blocks">
          <span className="block-invis"></span>
          <span className="block"></span>
          <span className="block"></span>
        </div>
      </>
      break
    case 3:
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
      className={`story-points`}
      value={ points }>
      { blocks }
    </button>
  )
}

export default StoryPoints