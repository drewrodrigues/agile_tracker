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
  subject(:project) { build(:project) }

  describe "associations" do
    it { is_expected.to belong_to(:user) }
    it { is_expected.to have_many(:stories) }
    it { is_expected.to have_many(:workflows).dependent(:destroy) }

    it "destroys all associated workflows upon deletion" do
      project = create(:project)
      workflow_count = project.workflows.count

      expect {
        project.destroy
      }.to change(Workflow, :count).by(-workflow_count)
    end
  end

  describe "validations" do
    it { is_expected.to validate_presence_of(:title) }
    it { is_expected.to validate_uniqueness_of(:title)
                       .scoped_to(:user_id)
                       .case_insensitive }
  end

  describe "initialization" do
    it "automatically creates base workflows upon creation" do
      project = create(:project)
      expect(project.workflows.count).to eq(4)
    end
  end
end
