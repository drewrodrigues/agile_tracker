import { connect } from 'react-redux'

import ProjectShow from './projectShow'

import { getProject } from '../../actions/projectActions'
import { selectWorkflowsByProjectId } from '../../reducers/selectors'
import { updateStory } from "../../actions/storyActions"
import { toggleWorkflow } from '../../actions/uiActions'

const mapStateToProps = (state, ownProps) => {
  return {
    project: state.entities.projects[ownProps.match.params.id],
    workflows: selectWorkflowsByProjectId(state, ownProps.match.params.id),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProject: id => dispatch(getProject(id)),
    updateStory: story => dispatch(updateStory(story)),
    toggleWorkflow: title => dispatch(toggleWorkflow(title))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow)