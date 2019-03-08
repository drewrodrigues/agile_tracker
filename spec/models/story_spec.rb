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

require 'rails_helper'

RSpec.describe Story, type: :model do
  subject(:story) { build(:story) }

  describe "validations" do
    # it { is_expected.to belong_to(:workflow) }
    
    # it { is_expected.to validate_presence_of(:description) } // TODO: allow empty string
    it { is_expected.to validate_presence_of(:title) }
    
    it { is_expected.to validate_inclusion_of(:kind).in_array(
      %w(Bug Chore Feature Release)
    )}
    it { is_expected.to validate_inclusion_of(:points).in_array([0, 1, 2, 3])}
    # it { is_expected.to validate_inclusion_of(:status).in_array(
    #   %w(Unstarted Started Finished Delivered Rejected Accepted)
    # )}
  end
end
