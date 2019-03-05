json.set! workflow.id do
  json.extract! workflow, :id, :title, :project_id, :position
end