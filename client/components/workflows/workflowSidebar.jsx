import React, { Component } from 'react'

class WorkflowSidebar extends Component {
  render() {
    return (
      <aside className={`sidebar`}>
        <nav>
          <ul>
            <li>
              <a className="sidebar-hamburger" onClick={ this.props.toggleSidebar }><i className="fa fa-bars"></i></a>
            </li>

            <li>
              <a className={`sidebar-link ${ this.props.icebox ? 'active' : '' }`} onClick={ this.props.toggleIcebox }>
                <i className="fa fa-snowflake-o"></i>
                <span className="text">Icebox</span>
                <span className="sidebar-count">{ this.props.counts["Icebox"] }</span>
              </a>
            </li>

            <li>
              <a className={`sidebar-link ${ this.props.backlog ? 'active' : '' }`} onClick={ this.props.toggleBacklog }>
                <i className="fa fa-inbox"></i>
                <span className="text">Backlog</span>
                <span className="sidebar-count">{ this.props.counts["Backlog"] }</span>
              </a>
            </li>

            <li>
              <a className={`sidebar-link ${ this.props.current ? 'active' : '' }`} onClick={ this.props.toggleCurrent }>
                <i className="fa fa-list-ul"></i>
                <span className="text">Current</span>
                <span className="sidebar-count">{ this.props.counts["Current"] }</span>
              </a>
            </li>

            <li>
              <a className={`sidebar-link ${ this.props.done ? 'active' : '' }`} onClick={ this.props.toggleDone }>
                <i className="fa fa-check"></i>
                <span className="text">Done</span>
                <span className="sidebar-count">{ this.props.counts["Done"] }</span>
              </a>
            </li>

          </ul>
        </nav>
      </aside>
    )
  }
}

export default WorkflowSidebar

