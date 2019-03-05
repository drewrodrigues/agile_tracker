# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Project.destroy_all
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
      points: rand(3) + 2,
      status: "Accepted",
      title: "Random Story Title"
    ) 
  end
end