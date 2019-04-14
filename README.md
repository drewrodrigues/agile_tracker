# AgileTracker
[![Build Status](https://travis-ci.com/thesimpledev/agile_tracker.svg?branch=master)](https://travis-ci.com/thesimpledev/agile_tracker) [![Maintainability](https://api.codeclimate.com/v1/badges/2392c692faea6678de8d/maintainability)](https://codeclimate.com/github/thesimpledev/agile_tracker/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/2392c692faea6678de8d/test_coverage)](https://codeclimate.com/github/thesimpledev/agile_tracker/test_coverage)

Check out the live app [here](https://agile-tracker.herokuapp.com).

Agile Tracker is an agile project management tool, inspired by Pivotal Tracker. It uses Rails and Postgres on the backend and React and Redux on the frontend.

This project was built in 10 days, although I plan on continuing to use it, add features and improve it.

## Features

#### Authentication
- Password digest using BCrypt.
- Session token refreshed upon every sign in & sign out, allowing one session for each user.

#### Authorization
- Prevent users from using crud operations on other user's resources.

#### Projects
- Allow users to create, update and destroy projects.

#### Stories
- Allow users to create, update and destroy stories.
- Conditionally show next status button or estimate button.
- Estimate points by clicking on a point estimate component.
- Modularize components on story to handle different actions:

```jsx
<StoryCaret 
  showForm={ showForm } 
  toggleForm={ this.toggleForm }/>

<StoryIcon 
  kind={ story.kind }/>

<StoryPoints 
  points={ story.points } 
  status={ story.status }/>

<EstimateOrButton
  acceptStory={ acceptStory }
  story={ story }
  nextStatusForStory={ nextStatusForStory }
  rejectStory={ rejectStory }
  updateStory={ updateStory }/>
```

#### Drag and Drop
* Allow users to drag and drop stories across workflows.
  * Instead of disabling the user's action (such as dragging to an incorrect workflow based upon the status, the way pivotal tracker does) we allow the user to do what they want, then handle the logic to ensure the action is valid on the backend with some simple logic and some routes. With this implementation, you only need one action to accomplish moving a story, instead of having to edit the story's status, then dragging it into the appropriate workflow.
    *  `/stories/:id/accept`
    * `/stories/:id/reject`
    * `/stories/:id/next`
```ruby
class Api::StoriesController < ApplicationController
  def next
    if @story.next_status_and_workflow
    # ...
  end

  def accept
    if @story.accept
    # ...
  end

  def reject
    if @story.reject
    # ...
  end
end

class Story
  def next_status_and_workflow
    next_status
    next_workflow
    save
  end

  def accept
    self.status = "Accepted"
    send_to_done_workflow
    save
  end

  def reject
    self.status = "Rejected"
    save
  end
end
```

#### Hot Keys
- `alt + h` toggles sidebar
- `alt + i` toggles icebox workflow
- `alt + b` toggles backlog workflow
- `alt + c` toggles current workflow
- `alt + d` toggles done workflow


## Flows

>##### Creating new project
![Creating new project](https://github.com/thesimpledev/agile_tracker/blob/master/readme/adding_new_project.gif)

>##### Loading screen on project load
![Loading screen on project load](https://github.com/thesimpledev/agile_tracker/blob/master/readme/loading.gif)

>##### Creating new story
![Adding a story](https://github.com/thesimpledev/agile_tracker/blob/master/readme/add_story.gif)

>##### Starting a story
![Starting a story](https://github.com/thesimpledev/agile_tracker/blob/master/readme/next_status_started.gif)

>##### Estimating story points
![Estimating story points](https://github.com/thesimpledev/agile_tracker/blob/master/readme/point_count.gif)

>##### Moving story through statuses to accepted 
![Moving story through statuses to accepted](https://github.com/thesimpledev/agile_tracker/blob/master/readme/statuses_to_accepted.gif)

>##### Moving story from current to done
![Moving story from current to done](https://github.com/thesimpledev/agile_tracker/blob/master/readme/workflow_to_accepted.gif)

>##### Moving story from done to current
![Moving story from accepted to current](https://github.com/thesimpledev/agile_tracker/blob/master/readme/workflow_to_current.gif)

>##### Story count on sidebar
![Story count on sidebar](https://github.com/thesimpledev/agile_tracker/blob/master/readme/story_count.gif)

>##### Hiding and showing workflows from sidebar
![Hiding and showing workflows from sidebar](https://github.com/thesimpledev/agile_tracker/blob/master/readme/chrome-capture.gif)

>##### Hiding and showing workflows from button
![Hiding and showing workflows from button](https://github.com/thesimpledev/agile_tracker/blob/master/readme/hide_button.gif)

>##### Hiding and showing workflows from hotkeys
![Hiding and showing workflows from hotkeys](https://github.com/thesimpledev/agile_tracker/blob/master/readme/hotkeys.gif)

### Pages
>##### Landing
![Landing Page](https://github.com/thesimpledev/agile_tracker/blob/master/readme/landing.png)

>##### Sign up
![Sign up](https://github.com/thesimpledev/agile_tracker/blob/master/readme/my_sign_in.png)

>##### Project Index
![Project Index](https://github.com/thesimpledev/agile_tracker/blob/master/readme/2019-03-08-09-22-agile-tracker.herokuapp.com.png)

>##### Project Show Filled
![Project Show Filled](https://github.com/thesimpledev/agile_tracker/blob/master/readme/2019-03-08-09-22-agile-tracker.herokuapp.com%20(2).png)

>##### Project Show Empty
![Project Show Empty](https://github.com/thesimpledev/agile_tracker/blob/master/readme/2019-03-08-09-25-agile-tracker.herokuapp.com.png)
