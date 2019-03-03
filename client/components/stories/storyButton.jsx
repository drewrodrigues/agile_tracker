import React from 'react'

const StoryButton = ({ status, updateStory, story }) => {
  let text
  let nextState

  // TODO: REFACTOR hardcore

  switch (status) {
    case "Unstarted":
      text = "Start"
      if (story.workflow === "Icebox" || story.workflow === "Backlog") {
        nextState = Object.assign({}, story, { status: "Started", workflow: "Current" })
      } else {
        nextState = Object.assign({}, story, { status: "Started" })
      }
      break
    case "Started":
      text = "Finish"
      nextState = Object.assign({}, story, { status: "Finished" })
      break
    case "Finished":
      text = "Deliver"
      nextState = Object.assign({}, story, { status: "Delivered" })
      break
    case "Rejected":
      text = "Restart"
      nextState = Object.assign({}, story, { status: "Started" })
      break
  }

  if (status === "Delivered") {
    let nextAcceptedState = Object.assign({}, story, { status: "Accepted", workflow: "Done" })
    let nextRejectedState = Object.assign({}, story, { status: "Rejected" })
    return (<>
      <button 
        className={`button-status button-status-reject`}
        onClick={ () => updateStory(nextRejectedState) }>
        Reject
      </button>
      <button 
        className={`button-status button-status-accept`}
        onClick={ () => updateStory(nextAcceptedState) }>
        Accept
      </button>
    </>)
  }

  if (status === "Rejected") {
    return (<>
      <button 
        className={`button-status button-status-${ status }`}
        onClick={ () => updateStory(nextState) }>
        <i className="fa fa-circle"></i>{ text }
      </button>
    </>)
  }

  if (status === "Accepted") return null
  
  return (
    <button 
      className={`button-status button-status-${ status }`}
      onClick={ () => updateStory(nextState) }>
      { text }
    </button>
  )
}

export default StoryButton