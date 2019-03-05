class CreateWorkflows < ActiveRecord::Migration[5.2]
  def change
    create_table :workflows do |t|
      t.string :title, null: false
      t.integer :project_id, null: false
      t.integer :position, null: false

      t.timestamps
    end

    add_index :workflows, :project_id
    add_index :workflows, [:title, :project_id], unique: true
  end
end
