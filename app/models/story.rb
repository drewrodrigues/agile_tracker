# == Schema Information
#
# Table name: stories
#
#  id          :bigint(8)        not null, primary key
#  description :string           default(""), not null
#  kind        :string           default("Feature"), not null
#  points      :integer          default(0), not null
#  status      :string           default("Unstarted"), not null
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  position    :integer          not null
#  workflow_id :integer          not null
#

# TODO: don't allow icebox && anything other than unstarted

class Story < ApplicationRecord
  default_scope { order(position: :asc)}

  acts_as_list scope: :workflow

  belongs_to :workflow
  
  validates :description, presence: true, allow_blank: true
  validates :title, presence: true

  validates :kind, inclusion: %w(Bug Chore Feature Release)
  validates :points, inclusion: [0, 1, 2, 3]
  validates :status, inclusion: %w(Unstarted Started Finished Delivered Rejected Accepted)
end
