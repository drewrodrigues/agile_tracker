json.set! story.id do
  json.extract! story, :id, :description, :kind, :position, :points, :workflow_id, :status, :title
end