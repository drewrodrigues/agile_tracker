import { connect } from 'react-redux'
import StoryForm from './storyForm'
import { createStory } from '../../actions/storyActions'

const mapStateToProps = (_, ownProps) => {
  return {
    // TODO: errors
    story: {
      title: "",
      kind: "Feature",
      points: "Unestimated",
      description: "",
      workflow: ownProps.workflow.id
    },
    workflowId: ownProps.workflow.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    action: (id, story) => dispatch(createStory(id, story))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryForm)