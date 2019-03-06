import React from 'react'

import StoryEstimate from './storyEstimate'
import StoryButton from './storyButton'

const EstimateOrButton = ({ story, nextStatusForStory, rejectStory, acceptStory, updateStory }) => {
  if (story.points === 0) {
    return <StoryEstimate story={ story } update={ updateStory }/>
  } else if (story.status !== "Accepted") {
    return <>
      <StoryButton
        status={ story.status }
        story={ story }
        nextStatusForStory={ nextStatusForStory }
        rejectStory={ rejectStory }
        acceptStory={ acceptStory }/>
    </>
  } else {
    return null
  }
}

export default EstimateOrButton