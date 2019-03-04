import {
  RECEIVE_STORY,
  RECEIVE_STORIES,
  REMOVE_STORY
} from '../../actions/storyActions'

const storiesReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let newState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_STORY:
      return Object.assign(newState, action.story)
    case RECEIVE_STORIES:
      return Object.assign(newState, action.stories)
    case REMOVE_STORY:
      delete newState[action.id]
      return newState
    default:
      return oldState
  }
}

export default storiesReducer