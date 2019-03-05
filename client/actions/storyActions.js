import * as APIUtil from '../utils/storyUtil'

export const RECEIVE_STORY   = "RECEIVE_STORY"
export const RECEIVE_STORIES = "RECEIVE_STORIES"
export const REMOVE_STORY    = "REMOVE_STORY"

// TODO: handle errors

export const createStory = (projectId, story) => dispatch => {
  return APIUtil.createStory(projectId, story)
    .then(storyResponse => dispatch(receiveStory(storyResponse)))
}

export const updateStory = story => dispatch => {
  return APIUtil.updateStory(story)
    .then(storyResponse => dispatch(receiveStory(storyResponse)))
}

export const deleteStory = story => dispatch => {
  return APIUtil.deleteStory(story)
    .then(() => dispatch(removeStory(story)))
}

export const nextStatusForStory = story => dispatch => {
  return APIUtil.nextStatusForStory(story)
    .then(storyResponse => dispatch(receiveStory(storyResponse)))
}

export const rejectStory = story => dispatch => {
  return APIUtil.rejectStory(story)
    .then(storyResponse => dispatch(receiveStory(storyResponse)))
}

export const acceptStory = story => dispatch => {
  return APIUtil.acceptStory(story)
    .then(storyResponse => dispatch(receiveStory(storyResponse)))
}

const receiveStory = story => {
  return {
    type: RECEIVE_STORY,
    story
  }
}

export const receiveStories = stories => {
  return {
    type: RECEIVE_STORIES,
    stories
  }
}

const removeStory = id => {
  return {
    type: REMOVE_STORY,
    id
  }
}