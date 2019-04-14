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

  describe "associations" do
    it { is_expected.to belong_to(:project) }
    it { is_expected.to have_many(:stories).dependent(:destroy) }
  end

  describe "validations" do
    it { is_expected.to validate_inclusion_of(:title).in_array(Workflow::TITLES) }
  end

  describe "::create_base_workflows" do
    before do
      @project = create(:project)
      @project.workflows.destroy_all
      Workflow.create_base_workflows(@project.id)
    end

    it "creates Icebox workflow" do
      expect(@project.workflow('Icebox')).to be_a(Workflow)
    end
    
    it "creates Backlog workflow" do
      expect(@project.workflow('Backlog')).to be_a(Workflow)
    end
    
    it "creates Current workflow" do
      expect(@project.workflow('Current')).to be_a(Workflow)
    end
    
    it "creates Done workflow" do
      expect(@project.workflow('Done')).to be_a(Workflow)
    end
  end
end
