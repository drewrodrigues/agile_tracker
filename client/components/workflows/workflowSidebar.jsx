import React, { Component } from 'react'

class WorkflowSidebar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.iceboxCount)
    return (
      <aside className="sidebar">
        <nav>
          <ul>
            <li>
              <a className="sidebar-hamburger"><i className="fa fa-bars"></i></a>
            </li>

            <li>
              <a className={`sidebar-link ${ this.props.icebox ? 'active' : '' }`} onClick={ this.props.toggleIcebox }>
                <i className="fa fa-snowflake-o"></i>
                Icebox
                <span className="sidebar-count">{ this.props.iceboxCount }</span>
              </a>
            </li>

            <li>
              <a className={`sidebar-link ${ this.props.backlog ? 'active' : '' }`} onClick={ this.props.toggleBacklog }>
                <i className="fa fa-inbox"></i>
                Backlog
                <span className="sidebar-count">{ this.props.backlogCount }</span>
              </a>
            </li>

            <li>
              <a className={`sidebar-link ${ this.props.current ? 'active' : '' }`} onClick={ this.props.toggleCurrent }>
                <i className="fa fa-list-ul"></i>
                Current
                <span className="sidebar-count">{ this.props.currentCount }</span>
              </a>
            </li>

            <li>
              <a className={`sidebar-link ${ this.props.done ? 'active' : '' }`} onClick={ this.props.toggleDone }>
                <i className="fa fa-check"></i>
                Done
                <span className="sidebar-count">{ this.props.doneCount }</span>
              </a>
            </li>

          </ul>
        </nav>
      </aside>
    )
  }
}

export default WorkflowSidebar

