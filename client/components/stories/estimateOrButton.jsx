import React from 'react'

import StoryEstimate from './storyEstimate'
import StoryButton from './storyButton'

const EstimateOrButton = ({ story, nextStatusForStory, rejectStory, acceptStory, updateStory }) => {
  if (story.status === "Accepted") return null

  if (story.points === 0 && story.status === "Unstarted") {
    return <StoryEstimate story={ story } update={ updateStory }/>
  } else {
    return <>
      <StoryButton
        status={ story.status }
        story={ story }
        nextStatusForStory={ nextStatusForStory }
        rejectStory={ rejectStory }
        acceptStory={ acceptStory }/>
    </>
  }
}

export default EstimateOrButton