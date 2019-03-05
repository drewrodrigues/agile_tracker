class AddNullFalseAfterUpdatingRecords < ActiveRecord::Migration[5.2]
  def change
    change_column_null :stories, :position, :false
    change_column_null :stories, :workflow_id, :false

    add_index :stories, :workflow_id
  end
end
