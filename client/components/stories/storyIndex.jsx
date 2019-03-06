import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import StoryContainer from './storyContainer'

const StoryIndex = ({ stories, workflow }) => {
  return (<>
      { stories.map((story, index) => (
        <Draggable draggableId={ story.id } key={ story.id } index={ story.position }>
          { provided  => (
            <StoryContainer
              key={ story.id } 
              innerRef={ provided.innerRef }
              provided={ provided }
              story={ story }
              innerRef={ provided.innerRef }
              workflow={ workflow }/>
          )}
        </Draggable>
      ))}
    </>
  )
}

export default StoryIndex