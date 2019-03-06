import { connect } from 'react-redux'

import StoryForm from './storyForm'
import { deleteStory, updateStory } from '../../actions/storyActions'

const mapStateToProps = (state, ownProps) => {
  return {
    story: ownProps.story
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    action: story => dispatch(updateStory(story)),
    delete: id => dispatch(deleteStory(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryForm)