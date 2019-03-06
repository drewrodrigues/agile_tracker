import React from 'react';

const StoryIcon = ({ kind }) => {
  let iconClass = {
    "Feature": "star icon-feature",
    "Bug": "bug icon-bug",
    "Chore": "cog icon-chore",
    "Release": "flag icon-release"
  }

  return (
    <i className={`fa fa-${iconClass[kind]} icon-story`}></i>
  )
}

export default StoryIcon