import { connect } from 'react-redux'
import WorkflowSidebar from './workflowSidebar'
import { toggleWorkflow } from '../../actions/uiActions'
import { selectStoriesByWorkflow } from '../../reducers/selectors'

const mapStateToProps = (state, ownProps) => {
  return {
    icebox: state.ui.icebox,
    backlog: state.ui.backlog,
    current: state.ui.current,
    done: state.ui.done,
    // TODO: implement again
    // iceboxCount: selectStoriesByWorkflow(ownProps.projectStories, "Icebox").length,
    // backlogCount: selectStoriesByWorkflow(ownProps.projectStories, "Backlog").length,
    // currentCount: selectStoriesByWorkflow(ownProps.projectStories, "Current").length,
    // doneCount: selectStoriesByWorkflow(ownProps.projectStories, "Done").length
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleIcebox: () => dispatch(toggleWorkflow('icebox')),
    toggleBacklog: () => dispatch(toggleWorkflow('backlog')),
    toggleCurrent: () => dispatch(toggleWorkflow('current')),
    toggleDone: () => dispatch(toggleWorkflow('done'))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkflowSidebar)