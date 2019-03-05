import { connect } from 'react-redux'
import Story from './story'
import { updateStory, acceptStory, rejectStory, nextStatusForStory } from "../../actions/storyActions"

const mapStateToProps = (state, ownProps) => {
  return {
    data: ownProps.story
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateStory: story => dispatch(updateStory(story)),
    nextStatusForStory: story => dispatch(nextStatusForStory(story)),
    acceptStory: story => dispatch(acceptStory(story)),
    rejectStory: story => dispatch(rejectStory(story))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Story)