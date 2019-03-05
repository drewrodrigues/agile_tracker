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

require 'rails_helper'

RSpec.describe Workflow, type: :model do
  subject(:workflow) { build(:workflow) }

  describe "validations" do
    it { is_expected.to validate_inclusion_of(:title).in_array(
      %w(Icebox Backlog Current Done)
    )}
  end
end
