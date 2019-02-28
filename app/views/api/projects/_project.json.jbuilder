json.set! project.id do
  json.extract! project, :id, :title, :user_id
end