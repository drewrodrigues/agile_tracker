# == Schema Information
#
# Table name: stories
#
#  id          :bigint(8)        not null, primary key
#  description :string           default(""), not null
#  kind        :string           default("Feature"), not null
#  order       :integer          default(0), not null
#  points      :integer          default(0), not null
#  project_id  :integer          not null
#  status      :string           default("Not started"), not null
#  title       :string           not null
#  workflow    :string           default("Icebox"), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Story < ApplicationRecord
  belongs_to :project
  
  validates :description, :title, presence: true

  validates :kind, inclusion: %w(Bug Chore Feature Release)
  validates :points, inclusion: [0, 1, 2, 3]
  validates :status, inclusion: %w(Unstarted Started Finished Delivered Rejected Accepted)
  validates :workflow, inclusion: %w(Icebox Backlog Current Done)
end
