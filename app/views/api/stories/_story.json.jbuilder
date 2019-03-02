json.set! story.id do
  json.extract! story, :id, :description, :kind, :order, :points, :project_id, :status, :title, :workflow
end