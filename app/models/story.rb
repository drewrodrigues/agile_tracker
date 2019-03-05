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
  # default_scope { order(position: :asc)}

  acts_as_list scope: :workflow

  belongs_to :project
  # belongs_to :workflow
  # has_one :project,
  #   through: :workflow
  
  validates :description, presence: true, allow_blank: true
  validates :title, presence: true

  validates :kind, inclusion: %w(Bug Chore Feature Release)
  validates :points, inclusion: [0, 1, 2, 3]
  validates :status, inclusion: %w(Unstarted Started Finished Delivered Rejected Accepted)

  # validate :icebox_must_be_unstarted
  # validate :backlog_must_be_unstarted
  # validate :current_cant_be_accepted
  # validate :done_must_be_accepted

  # before_validation :move_to_done_if_accepted
  # before_validation :move_from_icebox_if_needed
  # before_validation :move_from_backlog_if_needed
  # before_validation :move_from_done_if_needed

  # TODO: write specs for
  def next_status_and_workflow
    next_status
    next_workflow
    save
  end

  def accept
    self.status = "Accepted"
    send_to_done_workflow
    save(validate: false)
  end

  def reject
    self.status = "Rejected"
    save
  end

  private

  def next_workflow
    return if status != "Started"
    send_to_current_workflow
  end

  def next_status
    raise "Use accept or deny once delivered" if status == "Delivered"
    if status == "Rejected"
      self.status = "Started"
    else
      statuses = %w(Unstarted Started Finished Delivered)
      current_status_index = statuses.index(status)
      self.status = statuses.rotate(current_status_index + 1).first
    end
  end
  
  def send_to_current_workflow
    self.workflow = project.workflow("Current")
  end

  def send_to_done_workflow
    self.workflow = project.workflow("Done")
  end

  def move_to_done_if_accepted
    if workflow.title != "Done" && status == "Accepted"
      send_to_done_workflow
    end
  end

  def move_from_backlog_if_needed
    if workflow.title == "Backlog" && status != "Unstarted"
      send_to_current_workflow
    end
  end
  
  def move_from_done_if_needed
    if workflow.title == "Done" && status != "Accepted"
      send_to_current_workflow
    end
  end

  def move_from_icebox_if_needed
    if workflow.title == "Icebox" && status != "Unstarted"
      send_to_current_workflow
    end
  end

  def icebox_must_be_unstarted
    if workflow.title == "Icebox" && status != "Unstarted"
      errors.add(:status, "can't be #{status} while in icebox")
    end
  end

  def backlog_must_be_unstarted
    if workflow.title == "Backlog" && status != "Unstarted"
      errors.add(:status, "can't be #{status} while in backlog")
    end
  end

  def current_cant_be_accepted
    if workflow.title == "Current" && status == "Accepted"
      errors.add(:status, "can't be #{status} while in current")
    end
  end

  def done_must_be_accepted
    if workflow.title == "Done" && status != "Accepted"
      errors.add(:status, "can't be #{status} while in done")
    end
  end
end
