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

require 'rails_helper'

RSpec.describe Project, type: :model do
  subject(:project) { build(:project, user: create(:user)) }

  describe "validations" do
    it { is_expected.to belong_to(:user) }

    it { is_expected.to have_many(:stories) }
    it { is_expected.to have_many(:workflows) }

    it { is_expected.to validate_presence_of(:title) }
    it { is_expected.to validate_uniqueness_of(:title).scoped_to(:user_id).case_insensitive }
  end
end
