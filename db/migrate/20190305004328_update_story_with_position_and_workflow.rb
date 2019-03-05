class UpdateStoryWithPositionAndWorkflow < ActiveRecord::Migration[5.2]
  def change
    remove_column :stories, :order, :integer
    remove_column :stories, :workflow, :string
    remove_column :stories, :project_id, :integer

    add_column :stories, :position, :integer, null: false
    add_column :stories, :workflow_id, :integer, null: false

    add_index :stories, :workflow_id
    add_index :stories, [:workflow_id, :position], unique: true
  end
end
