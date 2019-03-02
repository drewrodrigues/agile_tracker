import { connect } from 'react-redux'
import Workflow from './workflow'
import { toggleWorkflow } from '../../actions/uiActions'

const mapStateToProps = (state, ownProps) => {
  return {
    // stories: selectStoriesByWorkflow(ownProps.workflow),
    canAddStory: ownProps.canAddStory,
    show: state.ui[ownProps.workflow.toLowerCase()],
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