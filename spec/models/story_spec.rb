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

require 'rails_helper'

RSpec.describe Story, type: :model do
  subject(:story) { build(:story) }

  describe "validations" do
    it { is_expected.to belong_to(:project) }
    
    it { is_expected.to validate_presence_of(:description) }
    it { is_expected.to validate_presence_of(:title) }
    
    it { is_expected.to validate_inclusion_of(:kind).in_array(
      %w(Bug Chore Feature Release)
    )}
    it { is_expected.to validate_inclusion_of(:points).in_array([0, 1, 2, 3])}
    it { is_expected.to validate_inclusion_of(:status).in_array(
      %w(Unstarted Started Finished Delivered Rejected Accepted)
    )}
    it { is_expected.to validate_inclusion_of(:workflow).in_array(
      %w(Icebox Backlog Current Done)
    )}
  end
end
