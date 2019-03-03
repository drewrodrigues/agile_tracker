import * as APIUtil from '../utils/storyUtil'

export const RECEIVE_STORY   = "RECEIVE_STORY"
export const RECEIVE_STORIES = "RECEIVE_STORIES"
export const REMOVE_STORY    = "REMOVE_STORY"

// TODO: handle errors

export const createStory = (projectId, story) => dispatch => {
  return APIUtil.createStory(projectId, story)
    .then((storyResponse) => dispatch(receiveStory(storyResponse)))
}

export const updateStory = story => dispatch => {
  return APIUtil.updateStory(story)
    .then(storyResponse => dispatch(receiveStory(storyResponse)))
}

export const deleteStory = story => dispatch => {
  return APIUtil.deleteStory(story)
    .then(() => dispatch(removeStory(story)))
}

const receiveStory = story => {
  return {
    type: RECEIVE_STORY,
    story
  }
}

const receiveStories = stories => {
  return {
    type: RECEIVE_STORIES,
    stories
  }
}

const removeStory = story => {
  return {
    type: REMOVE_STORY,
    story
  }
}