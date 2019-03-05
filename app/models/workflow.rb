# == Schema Information
#
# Table name: workflows
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  project_id :integer          not null
#  position   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Workflow < ApplicationRecord
  acts_as_list scope: :project

  belongs_to :project
  has_many :stories, dependent: :destroy

  validates :title, inclusion: %w(Icebox Backlog Current Done)

  def self.create_base_workflows(project_id)
    ["Icebox", "Backlog", "Current", "Done"].each do |title|
      Workflow.create!(title: title, project_id: project_id)
    end
  end
end
