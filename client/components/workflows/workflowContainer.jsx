import { connect } from 'react-redux'
import Workflow from './workflow'
import { toggleWorkflow } from '../../actions/uiActions'
import { selectStoriesByWorkflow } from "../../reducers/selectors"

const mapStateToProps = (state, ownProps) => {
  return {
    canAddStory: ownProps.canAddStory,
    show: state.ui[ownProps.workflow.toLowerCase()],
    stories: selectStoriesByWorkflow(ownProps.projectStories, ownProps.workflow),
    workflow: ownProps.workflow
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleWorkflow: () => dispatch(toggleWorkflow(ownProps.workflow.toLowerCase()))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Workflow)