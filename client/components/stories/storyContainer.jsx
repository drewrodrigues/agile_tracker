import { connect } from 'react-redux'
import Story from './story'
import { updateStory, acceptStory, rejectStory, nextStatusForStory } from "../../actions/storyActions"

const mapStateToProps = (_, ownProps) => {
  return {
    story: ownProps.story
  }
}

const mapDispatchToProps = dispatch => {
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