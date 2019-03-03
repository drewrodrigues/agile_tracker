import { connect } from 'react-redux'
import StoryForm from './storyForm'
import { createStory } from '../../actions/storyActions'

const mapStateToProps = (state, ownProps) => {
  return {
    // errors
    workflow: ownProps.workflow
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    action: (id, story) => dispatch(createStory(id, story))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryForm)