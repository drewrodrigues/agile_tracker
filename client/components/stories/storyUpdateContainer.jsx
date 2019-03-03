import { connect } from 'react-redux'
import StoryForm from './storyForm'
import { updateStory } from '../../actions/storyActions'

const mapStateToProps = (state, ownProps) => {
  console.log("container: ", ownProps.story)
  return {
    story: ownProps.story
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    action: story => dispatch(updateStory(story))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryForm)