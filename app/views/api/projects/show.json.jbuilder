json.set! "project" do
  json.partial! @project
end

json.set! "stories" do
  json.partial! "api/stories/story", collection: @project.stories
end