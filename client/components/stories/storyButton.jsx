import React from 'react'

const StoryButton = ({ status, rejectStory, acceptStory, nextStatusForStory, story }) => {
  let text = {
    "Unstarted": "Start",
    "Started": "Finish",
    "Finished": "Deliver",
    "Rejected": "Restart"
  }
  let icon = status === "Rejected" ? <i className="fa fa-circle"></i> : null

  if (status === "Delivered") {
    return (<>
      <button 
        className={`button-status button-status-reject`}
        onClick={ () => rejectStory(story) }>
        Reject
      </button>
      <button 
        className={`button-status button-status-accept`}
        onClick={ () => acceptStory(story) }>
        Accept
      </button>
    </>)
  } else if (status === "Accepted") {
    return null
  } else {
    return (
      <button
        className={`button-status button-status-${ status }`}
        onClick={ () => nextStatusForStory(story) }>
        {icon} { text[status] }
      </button>
    )
  }
}

export default StoryButton