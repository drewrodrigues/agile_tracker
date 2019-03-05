User.destroy_all
Project.destroy_all
Workflow.destroy_all
Story.destroy_all

ActiveRecord::Base.transaction do
  demo_user = User.create!(
    email:    "example@example.com",
    password: "password"
  )

  Project.create!([
    { title: "Cool project",         user: demo_user },
    { title: "Another cool project", user: demo_user },
    { title: "Agile Tracker",        user: demo_user },
    { title: "Trip Mates",           user: demo_user }
  ])

  project_id_offset = Project.first.id
  project_count     = Project.count

  workflow_id_offset = Workflow.first.id
  workflow_count     = Workflow.count
  kinds     =  %w(Bug Chore Feature)
  statuses  =  %w(Unstarted Started Finished Delivered Rejected Accepted)
  workflows =  %w(Backlog Current Done)

  200.times do
    random_workflow_id = workflow_id_offset + rand(workflow_count)
    random_project    = project_id_offset + rand(project_count)
    Story.create!(
      description: "",
      kind: kinds.sample,
      points: 0,
      workflow: Project.find(random_project).workflow('Icebox'),
      status: "Unstarted",
      title: "Random Story Title"
    ) 
  end

  100.times do
    random_workflow_id = workflow_id_offset + rand(workflow_count)
    random_project    = project_id_offset + rand(project_count)
    Story.create!(
      description: "",
      kind: kinds.sample,
      points: 0,
      workflow: Project.find(random_project).workflow('Backlog'),
      status: "Unstarted",
      title: "Random Story Title"
    ) 
  end

  75.times do
    random_workflow_id = workflow_id_offset + rand(workflow_count)
    random_project    = project_id_offset + rand(project_count)
    Story.create!(
      description: "",
      kind: kinds.sample,
      points: 0,
      workflow: Project.find(random_project).workflow('Current'),
      status: "Started",
      title: "Random Story Title"
    ) 
  end

  100.times do
    random_workflow_id = workflow_id_offset + rand(workflow_count)
    random_project    = project_id_offset + rand(project_count)
    Story.create!(
      description: "",
      kind: kinds.sample,
      workflow: Project.find(random_project).workflow('Done'),
      points: rand(4),
      status: "Accepted",
      title: "Random Story Title"
    ) 
  end
end