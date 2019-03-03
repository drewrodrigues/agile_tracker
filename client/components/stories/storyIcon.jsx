import React from 'react';

const StoryIcon = ({ kind }) => {
  let icon

  if (kind === "Feature") {
    icon = <i className="fa fa-star icon-story icon-feature"></i>
  } else if (kind === "Bug") {
    icon = <i className="fa fa-bug icon-story icon-bug"></i>
  } else if (kind === "Chore") {
    icon = <i className="fa fa-cog icon-story icon-chore"></i>
  } else if (kind === "Release") {
    icon = <i className="fa fa-flag icon-story icon-release"></i>
  }

  return (
    <>{ icon }</>
  )
}

export default StoryIcon