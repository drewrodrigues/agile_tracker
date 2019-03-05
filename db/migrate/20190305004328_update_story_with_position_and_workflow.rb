class UpdateStoryWithPositionAndWorkflow < ActiveRecord::Migration[5.2]
  def change
    add_column :stories, :position, :integer
    add_column :stories, :workflow_id, :integer

    Project.all.each do |project|
      project.create_base_workflows
    end

    Story.all.each do |story|
      story.workflow_id = story.project.workflow(story.workflow).id
      story.save
    end
    
    remove_column :stories, :order, :integer
    remove_column :stories, :workflow, :string
    remove_column :stories, :project_id, :integer
  end
end
