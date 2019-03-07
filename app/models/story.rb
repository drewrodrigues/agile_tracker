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
  VALID_STATUS_FOR_WORKFLOWS = {
    "Unstarted" => ["Backlog", "Current", "Icebox"],
    "Started"   => ["Current"],
    "Finished"  => ["Current"],
    "Delivered" => ["Current"],
    "Accepted"  => ["Done"],
    "Rejected"  => ["Current"]
  }

  NEXT_STATUS = {
    "Unstarted" => "Started",
    "Started"   => "Finished",
    "Finished"  => "Delivered",
    "Rejected"  => "Started"
  }

  default_scope { order(position: :asc) }

  acts_as_list scope: :workflow

  belongs_to :workflow
  has_one :project,
    through: :workflow
  
  validates :description, presence: true, allow_blank: true
  validates :title, presence: true

  validates :kind, inclusion: %w(Bug Chore Feature Release)
  validates :points, inclusion: [0, 1, 2, 3]
  validates :status, inclusion: %w(Unstarted Started Finished Delivered Rejected Accepted)
  validate  :ensure_status_is_correct_within_workflow

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

  def valid_status_for_workflow
    workflow_title = workflow.title
    unless VALID_STATUS_FOR_WORKFLOWS[status].include?(workflow_title)
      errors.add(:status, "can't be #{status} while in #{workflow_title}")
    end
  end

  def next_workflow
    return if status != "Started"
    send_to_current_workflow
  end

  def next_status
    raise "Use accept or deny once delivered" if status == "Delivered"
    self.status = NEXT_STATUS[status]
  end
  
  def send_to_current_workflow
    self.workflow = project.workflow("Current")
  end

  def send_to_done_workflow
    self.workflow = project.workflow("Done")
  end

  def ensure_status_is_correct_within_workflow
    workflow_title = workflow.title
    unless VALID_STATUS_FOR_WORKFLOWS[status].include?(workflow_title)
      if workflow_title == "Done"
        self.status = "Accepted"
      elsif workflow_title == "Current"
        self.status = "Started"
      elsif %w(Icebox Backlog).include?(workflow_title)
        self.status = "Unstarted"
      end
    end
  end
end
