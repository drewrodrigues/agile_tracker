import { connect } from 'react-redux'
import Workflow from './workflow'
import { toggleWorkflow } from '../../actions/uiActions'
import {
  countPointsByWorkflowId,
  selectStoriesByWorkflowId
} from "../../reducers/selectors"
import { updateStory } from '../../actions/storyActions'

const mapStateToProps = (state, ownProps) => {
  return {
    projectId: ownProps.projectId,
    points: countPointsByWorkflowId(state, ownProps.workflow.id),
    show: state.ui[ownProps.workflow.title.toLowerCase()],
    stories: selectStoriesByWorkflowId(state, ownProps.workflow.id),
    workflow: ownProps.workflow
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleWorkflow: () => dispatch(toggleWorkflow(ownProps.workflow.title.toLowerCase())),
    updateStory: story => dispatch(updateStory(story))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Workflow)