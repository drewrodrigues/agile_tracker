class CreateStories < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|
      t.string  :description, null: false, default: ""
      t.string  :kind,        null: false, default: "Feature"
      t.integer :order,       null: false, default: 0
      t.integer :points,      null: false, default: 0
      t.integer :project_id,  null: false
      t.string  :status,      null: false, default: "Unstarted"
      t.string  :title,       null: false
      t.string  :workflow,    null: false, default: "Icebox"

      t.timestamps
    end

    add_index :stories, :project_id
  end
end
