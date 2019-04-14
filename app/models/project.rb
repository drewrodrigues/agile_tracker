# == Schema Information
#
# Table name: projects
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Project < ApplicationRecord
  belongs_to :user

  has_many :workflows, dependent: :destroy
  has_many :stories, through: :workflows

  validates :title, presence: true
  validates :title, uniqueness: { scope: :user_id, case_sensitive: false }

  after_create :create_base_workflows

  def workflow(title)
    workflows.where(title: title).first
  end

  private
  
  def create_base_workflows
    Workflow.create_base_workflows(id)
  end
end
