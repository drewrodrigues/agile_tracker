import { connect } from 'react-redux'
import Story from './story'
import { updateStory } from "../../actions/storyActions"

const mapStateToProps = (state, ownProps) => {
  return {
    data: ownProps.story
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateStory: story => dispatch(updateStory(story))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Story)